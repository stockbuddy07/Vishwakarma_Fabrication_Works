import React from 'react';
import { 
  Building2, 
  ChevronRight, 
  HardHat, 
  Sun, 
  ShieldCheck, 
  Hammer, 
  Layout 
} from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

const Services = ({ darkMode }: ServicesProps) => {
  const services = [
    { 
      title: 'Industrial Fabrication', 
      icon: <HardHat size={28}/>, 
      desc: 'Precision-engineered steel structures, heavy-duty machine platforms, and industrial-grade framework solutions.', 
      img: "/images/factory.jpeg" 
    },
    { 
      title: 'Julo (Swings)', 
      icon: <Hammer size={28}/>, 
      desc: 'Custom-crafted ornamental and modern metal swings, combining traditional aesthetics with structural durability.', 
      img: "/images/julo.jpeg" 
    },
    { 
      title: 'Grill & Gate Work', 
      icon: <ShieldCheck size={28}/>, 
      desc: 'Premium security solutions including decorative window grills and automated main gates designed for safety.', 
      img: "/images/gate.png" 
    },
    { 
      title: 'Staircase Work', 
      icon: <ChevronRight size={28}/>, 
      desc: 'Modern spiral and industrial staircases featuring ergonomic handrails and high-load bearing capacity.', 
      img: "/images/stairs.jpeg" 
    },
    { 
      title: 'Roof Shade', 
      icon: <Sun size={28}/>, 
      desc: 'Weather-resistant polycarbonate sheds and tensile roof structures for parking, terraces, and commercial spaces.', 
      img: "/images/shad.jpeg" 
    }
  ];

  return (
    <section id="services" className={`py-24 px-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-black mt-6">Services</h2>
          <p className="opacity-60 mt-4 max-w-2xl mx-auto">
            Providing high-quality metal fabrication and structural engineering for industrial, commercial, and residential projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, i) => (
            <div 
              key={i} 
              // ADDED ID AND SCROLL MARGIN BELOW
              id={service.title.toLowerCase().replace(/\s+/g, '-')}
              className={`group rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 scroll-mt-24 ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
              }`}
            >
              {/* Image Container */}
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={service.img} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Content Container */}
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-70 leading-relaxed min-h-[60px]">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;