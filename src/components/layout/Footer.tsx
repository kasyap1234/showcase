import { Mail, Phone, MapPin, Link2, Globe, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-navy-dark)" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.5 17.5H6.5a4.5 4.5 0 0 1-.8-8.9 6.5 6.5 0 0 1 12.6-1.5 4.5 4.5 0 0 1 .2 10.4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 13L12 16L15 13" stroke="var(--color-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                className="text-lg font-bold text-white tracking-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Cloud Winit Solutions
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
              A dedicated software development company building custom web apps, mobile solutions, and cloud platforms for businesses worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Link2 size={16} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Globe size={16} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <MessageCircle size={16} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-bold mb-5 uppercase tracking-wider"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Web Applications</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Mobile Apps</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Cloud Solutions</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>AI & Automation</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>CRM & Business Tools</a></li>
              <li><a href="#services" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Support & Maintenance</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-sm font-bold mb-5 uppercase tracking-wider"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>About Us</a></li>
              <li><a href="#process" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Our Process</a></li>
              <li><a href="#industries" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Industries</a></li>
              <li><a href="#testimonials" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Testimonials</a></li>
              <li><a href="#contact" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-sm font-bold mb-5 uppercase tracking-wider"
              style={{ color: "var(--color-orange)", fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@cloudwinitsolutions.com" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                  hello@cloudwinitsolutions.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                  +91-XXXXX-XXXXX
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-white/60 mt-0.5 flex-shrink-0" />
                <span className="text-sm" style={{ color: "rgba(147, 197, 253, 0.7)" }}>
                  Hyderabad, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(147, 197, 253, 0.4)" }}>
            &copy; {new Date().getFullYear()} Cloud Winit Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs" style={{ color: "rgba(147, 197, 253, 0.4)" }}>
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
