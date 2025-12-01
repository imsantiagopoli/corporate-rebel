import React from 'react';
import { SERVICES } from '../constants';
import { Crosshair, ShieldAlert } from 'lucide-react';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="arsenal" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 flex flex-col items-center">
          <Reveal>
            <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">The Arsenal</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white uppercase">Liberation Products</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                We don't sell "HR Services". We sell Elite Infrastructure and Execution Capacity.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 200} width="100%">
                <div className="group relative border border-zinc-800 bg-zinc-900/50 p-8 hover:border-red-600/50 transition-colors duration-500 h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {index === 0 ? <Crosshair size={100} /> : <ShieldAlert size={100} />}
                </div>
                
                <div className="flex items-center space-x-3 mb-6">
                    <span className="text-red-600 font-mono text-xl">0{index + 1}</span>
                    <h4 className="text-2xl font-bold text-white uppercase">{service.title}</h4>
                </div>
                
                <p className="text-sm text-red-500 font-mono uppercase mb-4 tracking-wider">
                    // {service.codename}
                </p>
                
                <p className="text-gray-400 mb-8 h-20 leading-relaxed">
                    {service.description}
                </p>
                
                <ul className="space-y-3 mb-10">
                    {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                        <span className="mr-2 text-red-500">►</span> {feature}
                    </li>
                    ))}
                </ul>
                
                <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                    <span className="text-white font-bold font-mono">{service.price}</span>
                    <button className="text-sm font-bold uppercase tracking-widest text-white hover:text-red-500 transition-colors">
                    {service.cta} &rarr;
                    </button>
                </div>
                </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;