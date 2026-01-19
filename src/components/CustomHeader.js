import React, { useState } from 'react';
import { Menu, X, Ship, Globe, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Forexshipping_logo.png'

const CustomHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="w-full font-sans">
      {/* Top Bar - Contact Info (Hidden on mobile) */}
      <div className="bg-slate-900 text-white py-2 px-6 hidden md:flex justify-between items-center text-sm border-b border-slate-700">
        <div className="flex gap-6">
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-blue-400" /> 123 Logistics Way, Port Terminal NY
          </span>
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-blue-400" /> operations@forexshipping.in
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-blue-400" />
          <span>Global Logistics Network</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo Section */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="">
                <img src={logo} className='h-14' />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                  FOREX<span className="text-blue-600">SHIPPING</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                  Global Freight Solutions
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-200 active:scale-95">
                Ship Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-4 text-base font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-md"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-bold">
                  Track Shipment
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default CustomHeader;