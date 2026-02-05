'use client';

import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { Analytics } from "@vercel/analytics/next";

export default function AboutPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="pt-8">
        <About />

        {/* Trust Section */}
        <section className={`py-16 px-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-black mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Why Clients Trust Us Blindly
            </h2>
            <p className={`text-lg mb-12 max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              With over 500+ satisfied clients and years of expertise, we have built a reputation for excellence in fabrication services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏆', title: 'Quality Assurance', description: 'Every project undergoes rigorous quality checks to ensure perfection.' },
                { icon: '⏰', title: 'Timely Delivery', description: 'We respect your time and always deliver projects on schedule.' },
                { icon: '💰', title: 'Transparent Pricing', description: 'No hidden costs, clear pricing with detailed quotes upfront.' },
                { icon: '🔧', title: 'Expert Craftsmanship', description: 'Years of experience in fabrication with skilled artisans and modern techniques.' },
                { icon: '🤝', title: 'Customer Satisfaction', description: '500+ happy clients with repeat business and glowing testimonials.' },
                { icon: '🛡️', title: 'Reliable Support', description: '24/7 support and maintenance services for all our installations.' }
              ].map((item, index) => (
                <div key={index} className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className={`py-16 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-3xl md:text-4xl font-black mb-6 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              Our Location
            </h2>
            <div className={`p-6 rounded-2xl shadow-lg ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-50 border border-gray-200'}`}>
              <h3 className={`text-xl md:text-2xl font-bold mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Vishwakarma Fabrication Works
              </h3>
              <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Tulshidham, Zadeshwar Road, Bharuch, Gujarat
              </p>
              <a
                href="https://maps.app.goo.gl/rQmRBqaySfEfhzXk7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

