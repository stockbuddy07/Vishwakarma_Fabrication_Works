  'use client';

import { useState } from "react";
import { 
  Phone, MessageCircle, MapPin, Clock, 
  Star, Hammer, CheckCircle2, Users, 
  ChevronRight, Moon, Sun, Menu, X,
  Building2, ShieldCheck, HardHat
} from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import About from './components/About';
import Services from './components/Services';
import WorkingHours from './components/WorkingHours';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
// ============================================
// SEO Component (Head metadata)
// ============================================
const SEOHead = () => {
  // This would normally go in app/layout.tsx or page.tsx metadata
  const seoData = {
    title: "Vishwakarma Fabrication Works - Steel Fabrication in Bharuch, Gujarat",
    description: "Professional steel fabrication services in Bharuch. Specializing in industrial & non-industrial grill, gate, staircase, and roof shade. 4.5★ rated. Open 9AM-10PM daily.",
    keywords: "steel fabrication bharuch, grill work gujarat, gate fabrication, staircase work, roof shade bharuch, industrial fabrication, welding services bharuch",
    ogTitle: "Vishwakarma Fabrication Works - Best Steel Fabrication in Bharuch",
    ogDescription: "Expert fabrication services for grill, gate, staircase & roof shade. Located in Bharuch, Gujarat. Call +91 98987 40255",
    canonical: "https://vishwakarmafabrication.com"
  };

  return null; // In actual Next.js, this would be in metadata export
};

export default function VishwakarmaCompleteWebsite() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const contactDetails = [
    { icon: <Phone size={20} />, label: 'Phone', value: '+91 98987 40255', color: 'text-blue-600' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: '+91 98987 40255', color: 'text-green-600' },
    { icon: <MapPin size={20} />, label: 'Address', value: 'Shop No.10, Harikrishna Residency, Tulshidham, Zadeshwar Road, Bharuch, Gujarat' },
    { icon: <Clock size={20} />, label: 'Working Hours', value: '9:00 AM - 9:00 PM (Daily)' },
    { icon: <Star size={20} />, label: 'Google Rating', value: '4.5/5 stars' },
    { icon: <Hammer size={20} />, label: 'Services', value: 'Industrial & Non Industrial Grill, Gate, Staircase, Roof Shade' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      

      <Header darkMode={darkMode} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} setDarkMode={setDarkMode} />
      
      <Hero darkMode={darkMode} />
      <InfoCards darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Services darkMode={darkMode} />
      <WorkingHours darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />
      <Contact darkMode={darkMode} contactDetails={contactDetails} />

      <Footer darkMode={darkMode} />

    </div>
  );
}