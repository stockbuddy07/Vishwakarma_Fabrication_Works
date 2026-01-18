import { Phone, MessageCircle, MapPin, Clock, Star, Hammer } from 'lucide-react';
import { ReactNode } from 'react';

interface ContactProps {
  darkMode: boolean;
  contactDetails: {
    icon: string | ReactNode;
    label: string;
    value: string;
    color?: string;
  }[];
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Star,
  Hammer,
};

const Contact = ({ darkMode, contactDetails }: ContactProps) => {
  // Exact Google Maps link for directions to your shop
  const directionUrl = "https://www.google.com/maps/dir//VISHWAKARMA+FABRICATION+WORKS+Shop+No.+10,+GNFC+Rd,+Hari+Krishna+Residency+Bharuch+Gujarat+392015";
  
  // Exact Embed URL for your shop location
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.513460655459!2d73.01718697594953!3d21.72145306362486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc098df09a745%3A0xd4f04356a732ea56!2sVISHWAKARMA%20FABRICATION%20WORKS!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin";

  return (
    <section id="contact" className={`py-12 px-6 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="bg-red-50 text-red-500 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black mt-4">Contact Us</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-black">Contact Information</h3>
            <div className="space-y-4">
              {contactDetails.map((item, i) => {
                const IconComponent = typeof item.icon === 'string' ? iconMap[item.icon] : null;
                
                return (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-md shrink-0 transition-transform group-hover:scale-105">
                    {IconComponent ? <IconComponent size={20} className="scale-90" /> : <div className="scale-90">{item.icon}</div>}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase opacity-50 tracking-widest">{item.label}</p>
                    <p className={`text-sm md:text-base font-bold mt-0.5 ${item.color && !darkMode ? item.color : ''}`}>
                      {item.value}
                    </p>
                  </div>
                </div>
                );
              })}
            </div>
            
           <div className="flex flex-col sm:flex-row gap-3 pt-4">
  {/* Call Now Button */}
  <a 
    href="tel:+919898740255"
    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 min-h-[44px] rounded-xl font-black text-base shadow-lg transition-all active:scale-95 text-center flex items-center justify-center"
    aria-label="Call us at +91 98987 40255"
  >
    Call Now
  </a>

  {/* WhatsApp Button */}
  <a 
    href="https://wa.me/919898740255?text=Hi, I'm interested in your fabrication services."
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 min-h-[44px] rounded-xl font-black text-base shadow-lg transition-all active:scale-95 text-center flex items-center justify-center"
    aria-label="Contact us on WhatsApp"
  >
    WhatsApp
  </a>
</div>
          </div>

          <div>
            <h3 className="text-xl font-black mb-6">Visit Our Workshop</h3>
            <div className={`rounded-3xl overflow-hidden border shadow-xl transition-all ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-100'}`}>
              <div className="h-56 md:h-64 bg-gray-200">
                {/* Updated iFrame for Vishwakarma Fabrication Works */}
                <iframe 
                  title="Vishwakarma Fabrication Works" 
                  src={mapEmbedUrl} 
                  className={`w-full h-full border-0 ${darkMode ? 'invert hue-rotate-180 opacity-80' : ''}`} 
                  allowFullScreen={true} 
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                 <a 
                   href={directionUrl} 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center gap-3 mb-4 group cursor-pointer"
                 >
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <MapPin size={20}/>
                    </div>
                    <span className="font-black text-lg group-hover:text-blue-600 transition-colors">Vishwakarma Fabrication Works</span>
                 </a>
                 
                 <p className="text-sm opacity-70 leading-relaxed mb-5">
                   Located in Tulshidham area near the vegetables market, our workshop is easily accessible and equipped with modern fabrication facilities.
                 </p>

                 <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-widest">
                    <span className="text-green-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/> 
                      Open Daily (9 AM - 9 PM)
                    </span>
                    <a 
                      href={directionUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:underline font-bold"
                    >
                      Get Directions
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

export default Contact;