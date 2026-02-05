import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

interface CloudinaryResource {
  secure_url: string;
  public_id: string;
  format: string;
  width: number;
  height: number;
  bytes: number;
  created_at: string;
}

interface CloudinaryApiResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
  rate_limit_allowed: number;
  rate_limit_reset_at: string;
  rate_limit_remaining: number;
}

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 100; // Max requests per window

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitStore.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = request.headers.get('x-client-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (clientIP) {
    return clientIP;
  }

  // Fallback for development
  return '127.0.0.1';
}

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('Cloudinary configuration missing. Please check your environment variables.');
    throw new Error('Cloudinary configuration missing');
  }

  // Validate format (basic check)
  if (!/^[a-zA-Z0-9_-]+$/.test(cloudName)) {
    console.error('Invalid cloud name format:', cloudName);
    throw new Error('Invalid cloud name format');
  }

  return { cloudName, apiKey, apiSecret };
}

export async function GET(request: Request) {
  try {
    // Rate limiting
    const clientIP = getClientIP(request);
    if (!checkRateLimit(clientIP)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        {
          status: 429,
          headers: {
            'Retry-After': '60',
            'X-RateLimit-Limit': RATE_LIMIT_MAX_REQUESTS.toString(),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    // Get and validate Cloudinary config securely
    const config = getCloudinaryConfig();

    // Configure Cloudinary only for this request (not globally)
    const cloudinaryInstance = cloudinary.config({
      cloud_name: config.cloudName,
      api_key: config.apiKey,
      api_secret: config.apiSecret,
    });

    // Add timeout to prevent hanging requests
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Request timeout')), 30000)
    );

    const cloudinaryPromise = cloudinary.api.resources({
      type: 'upload',
      prefix: '', // Optional: specify a folder prefix if needed
      max_results: 500, // Adjust as needed
    });

    const result = await Promise.race([cloudinaryPromise, timeoutPromise]) as CloudinaryApiResponse;

    if (!result || !result.resources) {
      throw new Error('Invalid response from Cloudinary');
    }

    const images = result.resources.map((resource: CloudinaryResource) => resource.secure_url);

    // Add security headers
    return NextResponse.json(images, {
      headers: {
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
      }
    });

  } catch (error) {
    console.error('Cloudinary API error:', error);

    // Don't expose internal error details
    const isTimeout = error instanceof Error && error.message === 'Request timeout';
    const isConfigError = error instanceof Error && error.message.includes('Cloudinary configuration');
    const status = isTimeout ? 504 : isConfigError ? 500 : 500;
    const message = isTimeout ? 'Request timeout' : 'Failed to fetch images';

    return NextResponse.json(
      { error: message },
      {
        status,
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
        }
      }
    );
  }
}

// Only allow GET requests
export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
