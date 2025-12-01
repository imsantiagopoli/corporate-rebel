import React from 'react';
import { ArrowRight, Skull } from 'lucide-react';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
         {/* Updated to underground / subway tunnel image */}
         <img 
            src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=2070&auto=format&fit=crop" 
            alt="Underground Tunnel" 
            className="w-full h-full object-cover opacity-50 grayscale contrast-125"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center flex flex-col items-center">
        <Reveal>
            <div className="inline-flex items-center space-x-2 border border-red-600 text-red-500 px-4 py-1 mb-8 uppercase tracking-[0.2em] text-xs font-bold animate-pulse">
            <Skull size={14} />
            <span>Talent Operations V.3</span>
            </div>
        </Reveal>
        
        <Reveal delay={200}>
            <h1 className="text-5xl md:text-8xl font-bold leading-none tracking-tighter mb-6 text-white uppercase">
            Build Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 glitch-text" data-text="Remote Army">Remote Army</span>
            </h1>
        </Reveal>
        
        <Reveal delay={400}>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl text-gray-400 mb-10 font-light leading-relaxed">
            Stop hiring employees. Start deploying <strong className="text-white font-bold">Owners</strong>.
            <br/>
            We inject the top 1% of LATAM talent into your company. <br/>
            <span className="text-red-600">Fast. Lethal. Remote.</span>
            </p>
        </Reveal>
        
        <Reveal delay={600}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group relative px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-red-700">
                <span className="relative z-10 flex items-center">
                Find Talent Now <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
            </button>
            
            <button className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
                How It Works
            </button>
            </div>
        </Reveal>
      </div>
      
      <div className="absolute bottom-10 left-0 w-full text-center">
        <p className="text-gray-600 text-xs uppercase tracking-[0.3em]">Operational Status: Active</p>
      </div>
    </section>
  );
};

export default Hero;