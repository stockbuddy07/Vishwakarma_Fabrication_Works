'use client';

import { useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function GalleryPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        darkMode={darkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        setDarkMode={setDarkMode}
      />

      <main className="pt-24">
        <section
          id="gallery"
          className={`py-16 px-6 ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-xs font-bold uppercase">
                Gallery
              </span>
              <h1 className="text-3xl md:text-5xl font-black mt-6">
                Our Work Showcase
              </h1>
              <p className="mt-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
                A glimpse of our fabrication projects including grills, gates,
                staircases, roof shades and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/factory.jpeg"
                  alt="Industrial Fabrication"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/julo.jpeg"
                  alt="Julo (Swing) Work"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/gate.jpg"
                  alt="Gate Fabrication"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/stairs.jpeg"
                  alt="Staircase Fabrication"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/shad.jpeg"
                  alt="Roof Shade"
                  width={400}
                  height={224}
                  className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="rounded-3xl overflow-hidden shadow-lg flex items-center justify-center bg-gradient-to-tr from-orange-500 to-blue-600 text-white">
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

      <Footer darkMode={darkMode} />
    </div>
  );
}

