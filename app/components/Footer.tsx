import { Phone, MessageCircle, MapPin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer = ({ darkMode }: FooterProps) => {
  return (
    <footer
      className={`relative overflow-hidden isolate pt-12 pb-8 px-6 transition-all duration-500 ${
        darkMode 
          ? 'bg-[#030711] text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      {/* 1. VISUAL SEPARATOR: A distinct top "Glow" or "Shadow" line */}
      <div className={`absolute top-0 left-0 w-full h-[1px] ${
        darkMode 
          ? 'bg-gradient-to-r from-transparent via-blue-500/40 to-transparent' 
          : 'bg-gray-200'
      }`} />

      {/* 2. DEPTH EFFECT: Subtle background shapes to make it feel "layered" */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] transition-opacity duration-700 ${
          darkMode ? 'bg-blue-600/10 opacity-100' : 'bg-blue-100/50 opacity-100'
        }`} />
        <div className={`absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-[100px] transition-opacity duration-700 ${
          darkMode ? 'bg-purple-600/10 opacity-100' : 'bg-purple-100/30 opacity-100'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">

          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-6 space-y-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-xl shrink-0 scale-90 md:scale-100"
                style={{
                  background: 'linear-gradient(135deg, #FF8C42 0%, #9D5EBF 50%, #5B7FE8 100%)',
                }}
              >
                <span className="text-white font-black text-lg">V</span>
              </div>
              <div>
                <h2 className="font-black text-lg tracking-tight uppercase">
                  Vishwakarma Fabrication
                </h2>
                <div className="h-0.5 w-10 bg-blue-500 mt-1 rounded-full" /> {/* Accent line */}
              </div>
            </div>

            <p className={`text-sm leading-relaxed max-w-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              Excellence in metal works since 2005. Providing durable, 
              stylish, and safe fabrication solutions across Bharuch.
            </p>

            {/* Social Icons with "Glass" effect */}
            <div className="flex gap-3">
              {[Phone, MessageCircle, MapPin].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 ${
                    darkMode
                      ? 'bg-white/5 border border-white/10 hover:bg-blue-600 text-gray-400 hover:text-white'
                      : 'bg-gray-100 border border-gray-200 hover:bg-blue-600 text-gray-600 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* 3. STRUCTURE: Compact vertical lists with small headers */}
          <div className="lg:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Navigation</p>
            <ul className={`space-y-3 text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-500 mb-6">Our Services</p>
  <ul className={`space-y-3 text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
    {['Industrial Fabrication', 'Julo (Swings)', 'Grill & Gate Work', 'Staircase Work', 'Roof Shade'].map((item) => (
  <li key={item}>
    <a 
      href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
      className="hover:text-blue-500 transition-colors"
    >
      {item}
    </a>
  </li>
    ))}
  </ul>
</div>
        </div>

        {/* 4. FOOTER NOTE: A distinct "Legal" area with a darker/lighter sub-box */}
        <div className={`pt-8 mt-8 border-t transition-colors ${
          darkMode ? 'border-white/5' : 'border-gray-100'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-[10px] tracking-widest uppercase font-medium ${
                darkMode ? 'text-gray-600' : 'text-gray-400'
              }`}
            >
              © 2026 AyushGajjar. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-tighter font-bold text-gray-500">
              <span className="hover:text-blue-500 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-blue-500 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;