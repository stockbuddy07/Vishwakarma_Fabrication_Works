'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Testimonials = ({}: object) => {
  const { darkMode } = useTheme();
  
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
    // Use requestAnimationFrame for better performance
    let frameId: number;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed >= SLIDE_DURATION) {
        nextSlide();
        startTime = Date.now();
      }
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
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
    <section id="testimonials" className={`py-16 px-4 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Tightened Main Container */}
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-8">
          <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.3em] shadow-lg shadow-blue-500/20">
            Client Reviews
          </span>
          <h2 className={`text-2xl md:text-4xl font-black mt-4 tracking-tighter ${darkMode ? 'text-gray-100' : 'text-slate-900'}`}>
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
          <button 
            onClick={() => { prevSlide(); pauseTemporarily(); }} 
            aria-label="Previous testimonial"
            className="absolute -left-2 md:-left-12 top-1/2 -translate-y-1/2 z-50 p-3 min-w-[44px] min-h-[44px] rounded-lg bg-white/90 backdrop-blur shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-75 border border-slate-100 flex items-center justify-center"
          >
            <ChevronLeft size={18} strokeWidth={3} aria-hidden="true" />
          </button>
          
          <button 
            onClick={() => { nextSlide(); pauseTemporarily(); }} 
            aria-label="Next testimonial"
            className="absolute -right-2 md:-right-12 top-1/2 -translate-y-1/2 z-50 p-3 min-w-[44px] min-h-[44px] rounded-lg bg-white/90 backdrop-blur shadow-lg text-slate-900 hover:bg-blue-600 hover:text-white transition-all transform active:scale-75 border border-slate-100 flex items-center justify-center"
          >
            <ChevronRight size={18} strokeWidth={3} aria-hidden="true" />
          </button>

          {/* Optimized Card: Reduced max-width for better vertical flow on all devices */}
          <div className="relative mx-auto max-w-2xl rounded-[2.5rem] p-1 transition-all duration-500 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]">
            
            {/* Professional Rolling Line Trace */}
            {!isPaused && (
              <svg 
                key={activeIndex} 
                className="absolute inset-0 w-full h-full z-20 pointer-events-none" 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none"
                style={{ overflow: 'visible' }}
              >
                <rect
                  x="1" y="1"
                  width="98" height="98"
                  rx="12"
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="0.8"
                  pathLength="100"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  className="animate-border-loop"
                />
              </svg>
            )}

            <div className={`relative z-10 overflow-hidden rounded-[2.35rem] ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div 
                className="flex transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1)"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review, idx) => (
                  <div key={idx} className="min-w-full px-1">
                    <div className={`p-8 md:p-12 relative min-h-85 md:min-h-100 flex flex-col justify-center items-center text-center`}>
                      <Quote className={`absolute top-6 left-6 w-12 h-12 md:w-20 md:h-20 opacity-5 ${darkMode ? 'text-blue-300' : 'text-blue-900'}`} />
                      
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
                        <p className={`text-base md:text-xl font-black leading-snug mb-6 tracking-tight italic ${darkMode ? 'text-gray-100' : 'text-slate-800'}`}>
                          {review.text}
                        </p>

                        <div className="flex flex-col items-center">
                          <h4 className={`text-lg md:text-xl font-black tracking-tighter uppercase ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>{review.name}</h4>
                          <div className={`h-0.5 w-8 my-3 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`} />
                          <p className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40 ${darkMode ? 'text-gray-300' : 'text-slate-500'}`}>
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
          <div className="flex justify-center items-center gap-2.5 mt-8" role="tablist" aria-label="Testimonial navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActiveIndex(i); pauseTemporarily(); }}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-selected={i === activeIndex}
                role="tab"
                className={`transition-all duration-500 rounded-full min-w-[44px] min-h-[44px] flex items-center justify-center ${
                  i === activeIndex 
                    ? 'bg-blue-600 w-8 md:w-10 shadow-lg shadow-blue-500/50' 
                    : 'bg-slate-300 w-1.5'
                }`}
              >
                <span className="sr-only">Testimonial {i + 1}</span>
              </button>
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