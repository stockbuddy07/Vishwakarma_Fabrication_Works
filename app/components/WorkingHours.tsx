import React, { useState, useEffect } from 'react';
import { Clock, MessageCircle, Phone } from 'lucide-react';

interface WorkingHoursProps {
  darkMode: boolean;
}

const WorkingHours = ({ darkMode }: WorkingHoursProps) => {
  // 1. State to hold the live status
  const [isOpen, setIsOpen] = useState(false);

  // 2. Logic to check live status
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hour = now.getHours(); // 24-hour format
      
      // Business hours: 9:00 (9) to 21:00 (9 PM)
      const isBusinessHours = hour >= 9 && hour < 21;
      setIsOpen(isBusinessHours);
    };

    checkStatus(); // Initial check
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  const businessInfo = {
    title: "Always Here For You",
    description: "Consistent service throughout the week to ensure your needs are always met.",
    hours: "9:00 AM - 9:00 PM",
    days: "Monday - Sunday",
    // 3. Status is now dynamic
    status: isOpen ? "Open Now" : "Closed",
    phone: "+91 98987 40255",
    phoneLink: "tel:+919898740255",
    whatsappLink: "https://wa.me/919898740255"
  };

  return (
    <>
      {/* MOBILE VERSION */}
      <div className="md:hidden">
        <section className={`py-8 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-md mx-auto">
            <div className={`overflow-hidden rounded-3xl shadow-xl ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
              <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-black mb-2 leading-tight uppercase tracking-tight">{businessInfo.title}</h2>
                <p className="text-white/80 text-xs leading-relaxed">{businessInfo.description}</p>
              </div>

              <div className="p-5 space-y-3">
                <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700/50' : 'bg-blue-50'}`}>
                  <p className="text-[10px] font-bold opacity-60 uppercase mb-1">{businessInfo.days}</p>
                  <p className="text-lg font-black text-blue-600">{businessInfo.hours}</p>
                </div>
                
                {/* Status Section with dynamic color logic */}
                <div className={`p-4 rounded-2xl ${isOpen ? (darkMode ? 'bg-green-900/20' : 'bg-green-50') : (darkMode ? 'bg-red-900/20' : 'bg-red-50')}`}>
                  <div className={`flex items-center gap-2 ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                    <p className="text-gray-400 font-bold uppercase text-xs tracking-widest ">Current Status</p>
                    <span className="relative flex h-2 w-2">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-400' : 'bg-red-400'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    </span>
                    <span className="text-lg font-black uppercase">{businessInfo.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-2 pt-2">
                  <a 
                    href={businessInfo.phoneLink} 
                    aria-label="Call us at +91 98987 40255"
                    className="flex items-center justify-center gap-2 bg-gray-900 text-white py-3 min-h-[44px] rounded-xl text-xs font-bold"
                  >
                    <Phone size={14} aria-hidden="true"/> <span>Call</span>
                  </a>
                  <a 
                    href={businessInfo.whatsappLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="flex items-center justify-center bg-green-500 text-white py-3 min-h-[44px] rounded-xl text-xs font-bold gap-2"
                  >
                    <MessageCircle size={14} aria-hidden="true"/> <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* DESKTOP VERSION */}
      <div className="hidden md:block">
        <section className={`py-20 px-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
          <div className="max-w-6xl mx-auto">
            <div className={`flex rounded-[3rem] shadow-2xl overflow-hidden min-h-[500px] ${darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
              <div className="w-5/12 p-16 bg-gradient-to-br from-blue-600 to-indigo-800 text-white flex flex-col justify-center">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center mb-8">
                  <Clock size={48} />
                </div>
                <h2 className="text-5xl font-black leading-tight mb-6 uppercase tracking-tight">{businessInfo.title}</h2>
                <p className="text-blue-100/80 text-lg leading-relaxed">{businessInfo.description}</p>
              </div>

              <div className="w-7/12 p-16 flex flex-col justify-center">
                <div className="grid grid-cols-1 gap-10 mb-12">
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl ${darkMode ? 'bg-gray-700' : 'bg-blue-50'} text-blue-600`}><Clock size={32} /></div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">{businessInfo.days}</p>
                      <p className={`text-4xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>{businessInfo.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6">
                    <div className={`p-4 rounded-2xl ${isOpen ? (darkMode ? 'bg-green-900/30' : 'bg-green-50') : (darkMode ? 'bg-red-900/30' : 'bg-red-50')} ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <span className={`animate-ping absolute w-4 h-4 rounded-full ${isOpen ? 'bg-green-400' : 'bg-red-400'}`} />
                        <span className={`relative w-4 h-4 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} />
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-1">Current Status</p>
                      <p className={`text-4xl font-black uppercase ${isOpen ? 'text-green-500' : 'text-red-500'}`}>{businessInfo.status}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <a 
                    href={businessInfo.phoneLink} 
                    aria-label="Call us at +91 98987 40255"
                    className={`flex-1 flex items-center justify-center gap-3 py-5 min-h-[44px] rounded-2xl font-bold text-lg shadow-lg transition-transform hover:-translate-y-1 ${darkMode ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}`}
                  >
                    <Phone size={20} aria-hidden="true"/> <span>Call</span>
                  </a>
                  <a 
                    href={businessInfo.whatsappLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="flex-1 flex items-center justify-center gap-3 bg-green-500 text-white py-5 min-h-[44px] rounded-2xl font-bold text-lg shadow-lg transition-transform hover:-translate-y-1"
                  >
                    <MessageCircle size={20} aria-hidden="true"/> <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WorkingHours;