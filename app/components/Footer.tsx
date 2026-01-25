'use client';

import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const { darkMode } = useTheme();
  
  return (
    <footer className={`relative overflow-hidden isolate pt-12 pb-8 px-6 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* 1. VISUAL SEPARATOR: A distinct top "Glow" or "Shadow" line */}
      <div className={`absolute top-0 left-0 w-full h-[1px] ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`} />

      {/* 2. DEPTH EFFECT: Subtle background shapes to make it feel "layered" */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] bg-blue-100/50" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-[100px] bg-purple-100/30" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xl shrink-0 scale-90 md:scale-100"
                style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #9D5EBF 50%, #5B7FE8 100%)',
                }}
              >
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div>
                <h2 className="font-black text-lg tracking-tight uppercase">
                  Vishwakarma Fabrication
                </h2>
                <div className="h-0.5 w-10 bg-blue-500 mt-1 rounded-full" /> {/* Accent line */}
              </div>
            </div>

            <p className={`text-sm leading-relaxed max-w-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Excellence in metal works since 2005. Providing durable, 
              stylish, and safe fabrication solutions across Bharuch.
            </p>

            {/* Social Icons with "Glass" effect */}
            <div className="flex gap-3">
              <a
                href="tel:+919898740255"
                aria-label="Call us"
                className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-gray-100 border border-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white"
              >
                <Phone size={16} aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/919898740255"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
                className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-gray-100 border border-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Vishwakarma+Fabrication+Works+Bharuch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View location on Google Maps"
                className="w-11 h-11 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-gray-100 border border-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white"
              >
                <MapPin size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* 3. STRUCTURE: Compact vertical lists with small headers */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Navigation</p>
            <ul className="space-y-3 text-sm font-bold text-gray-500">
              <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-blue-500 transition-colors">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Our Services</p>
  <ul className="space-y-3 text-sm font-bold text-gray-500">
    {['Industrial Fabrication', 'Julo (Swings)', 'Grill & Gate Work', 'Staircase Work', 'Roof Shade'].map((item) => (
  <li key={item}>
    <a 
      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
      className="hover:text-blue-500 transition-colors"
    >
      {item}
    </a>
  </li>
    ))}
  </ul>
</div>
        </div>

        {/* 4. FOOTER NOTE: A distinct "Legal" area with a darker/lighter sub-box */}
        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] tracking-widest uppercase font-medium text-gray-400">
              © 2026 AyushGajjar. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-tighter font-bold text-gray-500">
              <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;