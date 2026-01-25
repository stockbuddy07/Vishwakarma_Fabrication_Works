'use client';

import React from 'react';
import { MapPin, Clock, Users, Star } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const InfoCards = () => {
  const { darkMode } = useTheme();
  
  return (
    <section className={`relative z-10 pt-2 pb-12 px-4 md:px-6 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {[
          { icon: <MapPin size={18} />, color: 'text-blue-500', bg: 'bg-blue-500/10', title: 'Bharuch', label: 'Location' },
          { icon: <Clock size={18} />, color: 'text-green-500', bg: 'bg-green-500/10', title: '9AM-9PM', label: 'Daily Open' },
          { icon: <Users size={18} />, color: 'text-amber-500', bg: 'bg-amber-500/10', title: '500+', label: 'Happy Clients' },
          { icon: <Star size={18} fill="currentColor" />, color: 'text-yellow-500', bg: 'bg-yellow-500/10', title: '4.5★', label: 'Google Rating' }
        ].map((card, i) => (
          <div 
            key={i} 
            className={`p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-sm text-center border ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100'}`}
          >
            <div className={`w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 rounded-xl flex items-center justify-center ${card.bg} ${card.color}`}>
              {card.icon}
            </div>
            
            <h3 className={`text-sm md:text-2xl font-bold mb-0.5 whitespace-nowrap ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {card.title}
            </h3>
            
            <p className={`text-[10px] md:text-xs uppercase font-bold tracking-tighter md:tracking-widest ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {card.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards; 