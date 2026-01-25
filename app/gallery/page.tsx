'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useTheme();
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Failed to fetch images:', err));
  }, []);

  const downloadImage = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageUrl.split('/').pop() || 'image';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="pt-24">
        <section
          id="gallery"
          className={`py-16 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-xs font-bold uppercase">
                Gallery
              </span>
              <h1 className={`text-3xl md:text-5xl font-black mt-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Our Work Showcase
              </h1>
              <p className={`mt-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                A glimpse of our fabrication projects including grills, gates,
                staircases, roof shades and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className={`rounded-3xl overflow-hidden shadow-lg relative ${darkMode ? 'bg-gray-700' : ''}`}>
                  <Image
                    src={image}
                    alt={image.split('/').pop()?.split('.')[0] || 'Gallery Image'}
                    width={400}
                    height={224}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <button
                    onClick={() => downloadImage(image)}
                    className="absolute top-2 right-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
                    title="Download Image"
                  >
                    <svg
                      className="w-4 h-4 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <div className={`rounded-3xl overflow-hidden shadow-lg flex items-center justify-center ${darkMode ? 'bg-linear-to-tr from-orange-600 to-blue-700' : 'bg-linear-to-tr from-orange-500 to-blue-600'} text-white`}>
                <div className="text-center px-6 py-10">
                  <p className="text-xs uppercase tracking-[0.25em] font-bold mb-3">
                    More Projects
                  </p>
                  <p className="text-base md:text-lg font-semibold mb-4">
                    Visit our workshop to see more live fabrication work in
                    progress.
                  </p>
                  <p className="text-xs opacity-80">
                    Tulshidham, Zadeshwar Road, Bharuch, Gujarat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

