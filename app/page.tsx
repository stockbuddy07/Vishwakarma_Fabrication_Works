  'use client';

import { useState } from "react";
import dynamic from 'next/dynamic';
import { useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';

// Dynamic imports for below-the-fold components to reduce initial bundle size
const About = dynamic(() => import('./components/About'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Services = dynamic(() => import('./components/Services'), {
  loading: () => <div className="min-h-[400px]" />,
});
const WorkingHours = dynamic(() => import('./components/WorkingHours'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Testimonials = dynamic(() => import('./components/Testimonials'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <div className="min-h-[400px]" />,
});

export default function VishwakarmaCompleteWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode } = useTheme();

  // Contact details - keep simple structure, icons loaded in component
  const contactDetails = [
    { icon: 'Phone', label: 'Phone', value: '+91 98987 40255', color: 'text-blue-600' },
    { icon: 'MessageCircle', label: 'WhatsApp', value: '+91 98987 40255', color: 'text-green-600' },
    { icon: 'MapPin', label: 'Address', value: 'Shop No.10, Harikrishna Residency, Tulshidham, Zadeshwar Road, Bharuch, Gujarat' },
    { icon: 'Clock', label: 'Working Hours', value: '9:00 AM - 9:00 PM (Daily)' },
    { icon: 'Star', label: 'Google Rating', value: '4.5/5 stars' },
    { icon: 'Hammer', label: 'Services', value: 'Industrial & Non Industrial Grill, Gate, Staircase, Roof Shade' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main id="main-content">
        <Hero />
        <InfoCards />
        <About />
        <Services />
        <WorkingHours />
        <Testimonials />
        <Contact contactDetails={contactDetails} />
      </main>

      <Footer />
    </div>
  );
}