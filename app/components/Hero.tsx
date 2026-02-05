'use client';

import Image from 'next/image';
import { Phone, MessageCircle, Download } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type HeroProps = object

const Hero = ({}: HeroProps) => {
  const { darkMode } = useTheme();
  return (
    <section 
      id="home" 
      className={`relative w-full flex flex-col items-center pt-24 pb-12 md:pb-20 overflow-hidden ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}`}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-orange-400 opacity-20"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] bg-blue-400 opacity-20"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        
        {/* IMAGE CONTAINER - mt-0 because parent now has pt-24 */}
        <div className="inline-block mx-auto">
          <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 ${darkMode ? 'border-gray-700 bg-gray-700' : 'border-white bg-gray-50'}`}>
            <Image
              src="/images/Vishwakarma_Fabrication_card.jpg"
              alt="Vishwakarma Fabrication Works"
              width={650}
              height={350}
              priority
              quality={85}
              className="max-w-full max-h-[45vh] md:max-h-[40vh] lg:max-h-[35vh] w-auto h-auto block object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 700px"
            />
            <a
              href="/images/Vishwakarma_Fabrication_card.jpg"
              download
              className={`absolute top-11 right-2 rounded-full p-2 transition-opacity hover:bg-opacity-100 ${darkMode ? 'bg-gray-600 bg-opacity-80 text-gray-100' : 'bg-white bg-opacity-20 text-gray-800'}`}
              aria-label="Download card image"
            >
              <Download size={25} />
            </a>
          </div>
        </div>

        {/* TEXT CONTENT */}
        <div className="mt-8 text-center flex flex-col items-center w-full">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold mb-4 border bg-blue-50 text-blue-600 border-blue-100">
            Bharuch, Gujarat • 9AM - 9PM
          </div>

          <h1 className={`text-3xl md:text-6xl font-black mb-3 tracking-tighter leading-tight uppercase ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Vishwakarma <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Fabrication</span> Works
          </h1>

          <p className={`text-sm md:text-base mb-8 max-w-2xl opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Specialists in Industrial & Non-Industrial Grills, Gates, Staircases, and Roof Shades.
          </p>

          {/* COMPACT BUTTONS */}
          <div className="flex flex-row gap-3 w-full max-w-md">
            <a 
              href="tel:+919898740255" 
              className="flex-1 flex items-center justify-center gap-2 py-4 min-h-[44px] rounded-xl font-bold bg-blue-600 text-white hover:scale-[1.02] transition-transform shadow-lg"
              aria-label="Call us at +91 98987 40255"
            >
              <Phone size={18} aria-hidden="true" /> <span>Call</span>
            </a>
            <a 
              href="https://wa.me/919898740255" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-4 min-h-[44px] rounded-xl font-bold bg-green-500 text-white hover:scale-[1.02] transition-transform shadow-lg"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle size={18} aria-hidden="true" /> <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;