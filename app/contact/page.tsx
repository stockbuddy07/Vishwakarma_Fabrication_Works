'use client';

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactDetails = [
    { icon: "Phone", label: "Phone", value: "+91 98987 40255", color: "text-blue-600" },
    { icon: "MessageCircle", label: "WhatsApp", value: "+91 98987 40255", color: "text-green-600" },
    {
      icon: "MapPin",
      label: "Address",
      value:
        "Shop No.10, Harikrishna Residency, Tulshidham, Zadeshwar Road, Bharuch, Gujarat",
    },
    {
      icon: "Clock",
      label: "Working Hours",
      value: "9:00 AM - 9:00 PM (Daily)",
    },
    { icon: "Star", label: "Google Rating", value: "4.5/5 stars" },
    {
      icon: "Hammer",
      label: "Services",
      value:
        "Industrial & Non Industrial Grill, Gate, Staircase, Roof Shade",
    },
  ];

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
        <Contact darkMode={darkMode} contactDetails={contactDetails} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

