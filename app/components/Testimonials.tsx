import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialsProps {
  darkMode: boolean;
}

const Testimonials = ({ darkMode }: TestimonialsProps) => {
  const reviews = [
    { name: "Harshil Patel", role: "Local Business Owner", text: "Exceptional quality in steel fabrication. They handled our storefront structure with great precision.", rating: 5 },
    { name: "Devang Kheni", role: "Industrial Engineer", text: "Vishwakarma Fabrication is the go-to place in Bharuch for heavy-duty industrial sheds. Very professional team.", rating: 5 },
    { name: "Premal Ariwala", role: "Homeowner", text: "Got custom safety grills and a main gate made. The finish is rust-proof and looks premium. Highly satisfied!", rating: 4 },
    { name: "Shubham Sharma", role: "Project Manager", text: "Timely delivery is their biggest strength. We had a tight deadline for a warehouse project and they nailed it.", rating: 5 },
    { name: "Vinod Patel", role: "Contractor", text: "I've worked with many fabricators, but their attention to detail in welding and alignment is unmatched.", rating: 5 },
    { name: "Kiran Modi", role: "Construction Contractor", text: "I have been working with Vishwakarma Fabrication for multiple projects. Their steel work is always perfect and they never miss deadlines.", rating: 5 },
    { name: "Vinod Sharma", role: "Industrial Client", text: "Expert engineering solutions and high-quality fabrication. They understand customer needs perfectly.", rating: 5 },
    { name: "Rajesh Patel", role: "Site Supervisor", text: "The best MS and SS fabrication shop in Bharuch. The finish was incredibly smooth and durable.", rating: 5 },
    { name: "Sanjay Mistry", role: "Project Manager", text: "Excellent service. Their expertise in precision cutting and assembling is top-notch.", rating: 5 },
    { name: "Anil Mehta", role: "Factory Owner", text: "Reliable and honest work. They provided a detailed quote and stuck to it. No hidden costs.", rating: 5 }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const SLIDE_DURATION = 5000;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  }, [reviews.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const pauseTemporarily = () => {
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    touchStart.current = null;
    touchEnd.current = null;
    setTimeout(() => setIsPaused(false), 2000);
  };

  return (
    <section id="testimonials" className={`py-16 px-4 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Tightened Main Container */}
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-8">
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-500/20">
            Client Reviews
          </span>
          <h2 className={`text-2xl md:text-4xl font-black mt-4 tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            What Our Clients Say
          </h2>
        </div>

        <div 
          className="relative group focus:outline-none"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={(e) => { touchStart.current = e.targetTouches[0].clientX; setIsPaused(true); }}
          onTouchMove={(e) => { touchEnd.current = e.targetTouches[0].clientX; }}
          onTouchEnd={handleTouchEnd}
        >
          {/* Compact Navigation Buttons */}
          <button onClick={() => { prevSlide(); pauseTemporarily(); }} className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-lg bg-white/90 backdrop-blur shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-75 border border-slate-100">
            <ChevronLeft size={18} strokeWidth={3} />
          </button>
          
          <button onClick={() => { nextSlide(); pauseTemporarily(); }} className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-50 p-2.5 rounded-lg bg-white/90 backdrop-blur shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-75 border border-slate-100">
            <ChevronRight size={18} strokeWidth={3} />
          </button>

          {/* Optimized Card: Reduced max-width for better vertical flow on all devices */}
          <div className={`relative mx-auto max-w-2xl rounded-[2rem] p-[2.5px] transition-all duration-500 ${
              darkMode ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]' : 'shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]'
            }`}>
            
            {/* Professional Rolling Line Trace */}
            {!isPaused && (
              <svg 
                key={activeIndex} 
                className="absolute inset-0 w-full h-full z-20 pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
              >
                <rect
                  x="0.5" y="0.5"
                  width="99" height="99"
                  rx="10"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="0.7"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  className="animate-border-loop"
                />
              </svg>
            )}

            <div className={`relative z-10 overflow-hidden rounded-[1.8rem] ${darkMode ? 'bg-slate-900' : 'bg-white'}`}>
              <div 
                className="flex transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="min-w-full px-1">
                    <div className={`p-8 md:p-12 relative min-h-[340px] md:min-h-[400px] flex flex-col justify-center items-center text-center`}>
                      <Quote className={`absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 opacity-5 ${darkMode ? 'text-blue-500' : 'text-blue-900'}`} />
                      
                      <div className="relative z-10 w-full max-w-lg">
                        {/* Compact Rating */}
                        <div className="flex justify-center gap-1 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < review.rating ? "#FBBF24" : "transparent"} 
                              color={i < review.rating ? "#FBBF24" : "#E2E8F0"} 
                              strokeWidth={2}
                            />
                          ))}
                        </div>

                        {/* Sharp Bold Text */}
                        <p className={`text-base md:text-xl font-black leading-snug mb-6 tracking-tight italic ${
                          darkMode ? 'text-gray-100' : 'text-slate-800'
                        }`}>
                          {review.text}
                        </p>

                        <div className="flex flex-col items-center">
                          <h4 className="text-lg md:text-xl font-black text-blue-600 tracking-tighter uppercase">{review.name}</h4>
                          <div className="h-0.5 w-8 bg-blue-600 my-3 rounded-full" />
                          <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {review.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2.5 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); pauseTemporarily(); }}
                className={`transition-all duration-500 rounded-full h-1.5 ${
                  i === activeIndex 
                    ? 'bg-blue-600 w-8 md:w-10 shadow-lg shadow-blue-500/50' 
                    : 'bg-slate-300 w-1.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes border-loop {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-border-loop {
          animation: border-loop ${SLIDE_DURATION}ms linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;