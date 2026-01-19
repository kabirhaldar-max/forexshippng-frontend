import React from 'react';
import { Search, MapPin, ArrowRight, ShieldCheck, Clock, Globe } from 'lucide-react';

const CustomHero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 lg:pt-24 lg:pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="relative z-10 text-center lg:text-left">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase bg-blue-100 text-blue-700 mb-6">
              <Globe size={16} className="mr-2" /> Global Logistics Excellence
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Shipping Beyond <br />
              <span className="text-blue-600">Boundaries.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0">
              Reliable, fast, and transparent shipping solutions for your global business. 
              Track your cargo in real-time across oceans and borders.
            </p>
          </div>

          {/* Right Column: Visual/Stats */}
          <div className="relative lg:h-[200px] flex items-center justify-center">
            {/* Main Image Mockup */}
            <div className="relative w-full h-full max-w-lg lg:max-w-none">
              <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800" 
                alt="Logistics and Shipping"
                className="relative rounded-3xl shadow-2xl object-cover h-full w-full"
              />
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 md:left-12 bg-white p-6 rounded-2xl shadow-xl hidden sm:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 p-3 rounded-full text-green-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Live Shipments</p>
                    <p className="text-2xl font-bold text-slate-900">12,840+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomHero;