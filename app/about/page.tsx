'use client';

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";

export default function AboutPage() {
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
        <About darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

