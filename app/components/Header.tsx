import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Moon, Sun, Menu, X } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  setDarkMode: (dark: boolean) => void;
}

const Header = ({ darkMode, mobileMenuOpen, setMobileMenuOpen, setDarkMode }: HeaderProps) => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className={`fixed w-full z-50 shadow-sm transition-colors ${darkMode ? 'bg-gray-900/95 text-white' : 'bg-white/95 text-gray-900'} backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[80px]"> {/* Slightly taller header for bigger logo */}
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                {/* Enhanced Glow Effect - Adjusted for larger size */}
                <div className="absolute -inset-2 bg-orange-800 rounded-full blur-md opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                
                {/* Logo Container: Removed border and increased size */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                  <Image 
                    src="/images/Vishwakarma_Fabrication_card_logo.jpg" 
                    alt="Vishwakarma Logo" 
                    className="w-full h-full object-contain"
                    width={64}
                    height={64}
                    priority
                  />
                </div>
              </div>
              
              <div>
                <div className={`font-extrabold text-base md:text-lg tracking-wider ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  VISHWAKARMA
                </div>
                <div className="text-[10px] md:text-[11px] text-blue-500 font-semibold uppercase tracking-[0.2em]">
                  Fabrication Works
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors hover:text-orange-500 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setDarkMode(!darkMode)} 
                className="p-3 min-w-[44px] min-h-[44px] rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
              </button>
              
              <button 
                className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
              </button>

              <a 
                href="tel:+919898740255" 
                className="hidden sm:block bg-orange-600 text-white px-6 py-3 min-h-[44px] rounded-full font-bold text-sm hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/40 flex items-center justify-center"
                aria-label="Call us at +91 98987 40255"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Sub-Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[500px] border-t border-gray-200 dark:border-gray-800' : 'max-h-0'}`}>
          <div className={`px-6 pt-4 pb-8 space-y-2 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-lg font-semibold rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-6">
              <a 
                href="tel:+919898740255" 
                className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white py-4 min-h-[44px] rounded-2xl font-bold text-lg shadow-xl"
                aria-label="Call us at +91 98987 40255"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;