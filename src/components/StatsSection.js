import React from 'react';
import { Package, Globe, Users, Building2, Anchor } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: '5 Bn+',
      label: 'Parcels delivered worldwide',
      icon: <Package className="w-8 h-8 text-red-600" />,
      position: 'up' // Determines if the red line is top or bottom
    },
    {
      id: 2,
      value: '150+',
      label: 'Countries Served',
      icon: <Globe className="w-8 h-8 text-red-600" />,
      position: 'down'
    },
    {
      id: 3,
      value: '100K+',
      label: 'Businesses served',
      icon: <Users className="w-8 h-8 text-red-600" />,
      position: 'up'
    },
    {
      id: 4,
      value: '100K+',
      label: 'Businesses Empowered',
      icon: <Building2 className="w-8 h-8 text-red-600" />,
      position: 'down'
    },
    {
      id: 5,
      value: '9.8 Mn+',
      label: "TEU's Shipped infrastructure covered",
      icon: <Anchor className="w-8 h-8 text-red-600" />,
      position: 'up'
    },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Global Reach, Unwavering Trust <br />
            <span className="relative">
              FOREXSHIPPING by the Numbers
              <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-red-600 rounded-full"></div>
            </span>
          </h2>
        </div>

        {/* Stats Journey Container */}
        <div className="relative mt-24">
          
          {/* Background Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0">
            <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path 
                d="M0 100C100 100 150 10 250 10C350 10 400 190 500 190C600 190 650 10 750 10C850 10 900 190 1000 190C1100 190 1150 100 1200 100" 
                stroke="#E2E8F0" 
                strokeWidth="2" 
                strokeDasharray="8 8"
              />
            </svg>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-4 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center lg:items-start group">
                {/* Visual Connector Card */}
                <div className="relative w-full max-w-[200px] flex flex-col items-center lg:items-start">
                  
                  {/* The Red Accent Line */}
                  <div className={`w-24 h-1.5 bg-red-600 mb-8 shadow-[0_4px_10px_rgba(220,38,38,0.3)] transition-transform duration-500 group-hover:scale-x-125 origin-left ${
                    stat.position === 'down' ? 'lg:order-last lg:mt-8 lg:mb-0' : ''
                  }`}></div>

                  {/* Icon & Content */}
                  <div className="mb-4 bg-slate-50 p-4 rounded-2xl group-hover:bg-red-50 transition-colors duration-300">
                    {stat.icon}
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-1">
                    {stat.value}
                  </h3>
                  
                  <p className="text-slate-500 text-sm font-medium leading-relaxed text-center lg:text-left">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;