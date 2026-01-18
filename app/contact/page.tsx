'use client';

import { useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Hammer,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactDetails = [
    { icon: <Phone size={20} />, label: "Phone", value: "+91 98987 40255", color: "text-blue-600" },
    { icon: <MessageCircle size={20} />, label: "WhatsApp", value: "+91 98987 40255", color: "text-green-600" },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value:
        "Shop No.10, Harikrishna Residency, Tulshidham, Zadeshwar Road, Bharuch, Gujarat",
    },
    {
      icon: <Clock size={20} />,
      label: "Working Hours",
      value: "9:00 AM - 9:00 PM (Daily)",
    },
    { icon: <Star size={20} />, label: "Google Rating", value: "4.5/5 stars" },
    {
      icon: <Hammer size={20} />,
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

