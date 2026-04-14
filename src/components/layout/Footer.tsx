import { Globe, MessageCircle, Mail, Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-md border border-white/10 bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center shadow-lg">
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
              Your end-to-end technology partner. We build, automate, and scale digital products — from web and mobile apps to cloud solutions, CRM systems, and AI integrations.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <Link size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="p-2 rounded-lg border border-white/5 bg-white/[0.02] hover:border-blue-500/20 text-zinc-400 hover:text-white transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Services</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Web Applications</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">CRM Development</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">AI Integrations</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Automation</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Support & Maintenance</a></li>
              <li><a href="#services" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Modernization</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display font-semibold mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#about" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#process" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">How We Work</a></li>
              <li><a href="#tech" className="text-sm text-zinc-400 hover:text-blue-400 transition-colors">Tech Stack</a></li>
              <li><a href="mailto:hello@cloudwinitsolutions.com" className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-2">
                <Mail size={14} /> Contact Us
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Cloud Winit Solutions. All rights reserved.
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
