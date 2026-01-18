'use client';

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";

export default function ServicesPage() {
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
        <Services darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

