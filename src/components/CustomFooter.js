import React from 'react';
import { 
  Ship, Send, Mail, MapPin, ArrowUpRight 
} from 'lucide-react';
import logo from '../assets/Forexshipping_logo.png'

const CustomFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: ['About Us', 'Our Fleet', 'Careers', 'News'],
    Services: ['Ocean Freight', 'Air Freight', 'Warehousing', 'Customs'],
    Support: ['Tracking Help', 'Terms of Service', 'Privacy Policy', 'FAQ'],
  };

  return (
    <footer className="relative bg-slate-900 pt-24 pb-12 overflow-hidden">
      {/* Decorative Background Glow */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Newsletter CTA */}
        <div className="grid lg:grid-cols-2 gap-12 pb-16 border-b border-slate-800 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to streamline your <span className="text-blue-500">global supply chain?</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Join 5,000+ businesses receiving our weekly logistics insights.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all">
              Subscribe <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Middle Section: Links & Branding */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 py-16">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5">
                <img src={logo} className='h-14' />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">
                FOREX<span className="text-blue-500">SHIPPING</span>
              </span>
            </div>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              Global logistics leader specializing in complex freight solutions, 
              real-time tracking, and end-to-end supply chain management.
            </p>
          </div>

          {/* Nav Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{title}</h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-blue-500 flex items-center group text-sm md:text-base">
                      {link}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 ml-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Info & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex flex-wrap justify-center gap-8">
            <span className="flex items-center gap-2"><MapPin size={16} /> 881 Logistics Way, Port Terminal NY</span>
            <span className="flex items-center gap-2"><Mail size={16} /> operations@forexshipping.in</span>
          </div>
          <p>© {currentYear} Forex Shipping Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;