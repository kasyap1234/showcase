import { Globe, MessageCircle, MapPin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md border border-white/10 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 13L12 16L15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-display font-medium text-lg tracking-tight text-white">
                Cloud Winit Solutions
              </span>
            </div>
            <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
              We build premium web applications and cross-platform mobile experiences. 
              Partnering with businesses to ensure long-term stability, scalability, and performance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 glass hover:text-white text-zinc-400 transition-colors rounded-full">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="p-2 glass hover:text-white text-zinc-400 transition-colors rounded-full">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 glass hover:text-white text-zinc-400 transition-colors rounded-full">
                <MapPin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#services" className="text-zinc-400 hover:text-blue-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-blue-400 transition-colors">Hybrid Mobile Apps</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-blue-400 transition-colors">Support & Maintenance</a></li>
              <li><a href="#services" className="text-zinc-400 hover:text-blue-400 transition-colors">System Architecture</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#about" className="text-zinc-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#expertise" className="text-zinc-400 hover:text-blue-400 transition-colors">Our Expertise</a></li>
              <li><a href="mailto:hello@cloudwinitsolutions.com" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={16} /> Contact Us
              </a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Cloud Winit Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
