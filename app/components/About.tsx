import Image from 'next/image';
import { CheckCircle2, Clock, ShieldCheck, MapPin } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About = ({ darkMode }: AboutProps) => {
  // Function to handle map opening
  const openMap = () => {
    const address = "Vishwakarma Fabrication Works, Shop No.10, Harikrishna Residency, Zadeshwar Road, Bharuch";
    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="about" className={`py-24 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-xs font-bold uppercase">About Us</span>
          <h2 className="text-3xl md:text-5xl font-black mt-6">Vishwakarma Fabrication Works</h2>
          <p className="text-blue-600 font-bold mt-2 uppercase">Industrial & Non-Industrial Works</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg opacity-80 leading-relaxed">
              We specialize in comprehensive fabrication services including Grill, Gate, Staircase, and Roof Shade solutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <CheckCircle2 size={20} className="text-blue-500" />, title: "Quality Work", desc: "Craftsmanship guaranteed" },
                { icon: <Clock size={20} className="text-blue-500" />, title: "Open Daily", desc: "9:00 AM - 9:00 PM" },
                { icon: <ShieldCheck size={20} className="text-blue-500" />, title: "Expert Team", desc: "Skilled specialists" },
                { icon: <MapPin size={20} className="text-blue-500" />, title: "Local Service", desc: "Serving Bharuch & nearby areas" }
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl ${darkMode ? 'bg-gray-900' : 'bg-blue-50'}`}>
                  {item.icon}
                  <h4 className="font-bold text-sm mt-2">{item.title}</h4>
                  <p className="text-xs opacity-60">{item.desc}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={openMap}
              aria-label="Open location in Google Maps"
              className="w-full text-left p-6 min-h-[44px] rounded-2xl text-white bg-gradient-to-r from-orange-600 to-blue-600 flex gap-4 items-center shadow-xl hover:scale-[1.02] transition-transform cursor-pointer group"
            >
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold">Visit Our Workshop</h4>
                <p className="text-sm opacity-90">Tulshidham, Zadeshwar Road, Bharuch</p>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded mt-1 inline-block uppercase tracking-wider font-bold">Open in Google Maps</span>
              </div>
            </button>
          </div>

          <div className="max-w-7xl mx-auto p-4">
            {/* Header Section */}
            <div className="flex justify-between items-end mb-6 px-2">
              <h3 className={`text-4xl font-black tracking-tight ${darkMode ? 'text-white' : 'text-gray-900'}`}>Gallery</h3>
            </div>

            {/* Bento Grid Layout - Height reduced to 450px for smaller images */}
            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[450px]">
              
              {/* 1. Large Main Card - Left Side */}
              <div className="col-span-1 row-span-2 rounded-[40px] rounded-br-none bg-gray-200 overflow-hidden shadow-lg border border-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=600" 
                  width={300}
                  height={450}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  alt="Workshop"
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 300px"
                />
              </div>

              {/* 2. Video Card - Top Right */}
              <div className="col-span-2 row-span-1 rounded-3xl rounded-tl-[60px] bg-black overflow-hidden relative shadow-xl">
                <iframe 
                  className="w-full h-full opacity-90"
                  src="https://www.youtube.com/embed/zqmDORs-jC0?autoplay=0&mute=1&loop=1&playlist=zqmDORs-jC0" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* 3. Small Card - Bottom Middle */}
              <div className="col-span-1 row-span-1 rounded-[30px] rounded-tr-none bg-gray-200 overflow-hidden shadow-md">
                <Image 
                  src="/images/factory.jpeg" 
                  width={300}
                  height={225}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                  alt="Fabrication Gallery"
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 300px"
                />
              </div>

              {/* 4. View More Card - Bottom Right */}
              <div className="col-span-1 row-span-1 rounded-3xl rounded-bl-[60px] bg-gray-200 overflow-hidden shadow-xl relative group cursor-pointer">
                <Image 
                  src="/images/julo.jpeg" 
                  width={300}
                  height={225}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  alt="Work Showcase"
                  loading="lazy"
                  sizes="(max-width: 1024px) 33vw, 300px"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
                  <a 
                    href="https://www.google.com/maps" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 text-xs rounded-full font-black shadow-2xl transform transition-all hover:scale-110 hover:bg-gray-100 active:scale-95"
                  >
                    View All ➔
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;