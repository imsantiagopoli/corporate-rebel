import React from 'react';
import Reveal from './Reveal';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div>
              <Reveal>
                <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">The Hiring Doctrine</h2>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase">
                    "Talent" is abundant. <br/>
                    <span className="text-gray-500">Excellence is scarce.</span>
                </h3>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-xl text-gray-300 font-light leading-relaxed">
                    Most agencies send you resumes. We send you relief.
                </p>
              </Reveal>
            </div>

            <div className="space-y-8 text-gray-400">
              <Reveal delay={300}>
                <p className="leading-relaxed text-lg">
                    You don't need more "employees." Employees need management. Employees need motivation. Employees watch the clock.
                </p>
              </Reveal>
              <Reveal delay={400}>
                <p className="leading-relaxed text-lg text-white border-l-2 border-red-600 pl-6">
                    You need <strong>Operators</strong>. <br/>
                    People who treat your business like it's their own. People who don't ask for permission, but ask for forgiveness.
                </p>
              </Reveal>
              <Reveal delay={500}>
                <p className="leading-relaxed text-lg">
                    We are a specialized recruitment firm that hunts down these rare individuals in LATAM. We don't care about their "cover letter." We care about their output.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <Reveal delay={600}>
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">Top 1%</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Acceptance Rate</p>
                    </div>
                </Reveal>
                <Reveal delay={700}>
                    <div>
                        <h4 className="text-3xl font-bold text-white mb-2">&lt; 7 Days</h4>
                        <p className="text-sm text-gray-500 uppercase tracking-widest">Time to Fill</p>
                    </div>
                </Reveal>
            </div>
          </div>

          <div className="relative">
             <Reveal delay={200}>
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
                    {/* Updated to skater / urban image */}
                    <img 
                    src="https://images.unsplash.com/photo-1567425121307-e5fa4e643794?q=80&w=1974&auto=format&fit=crop" 
                    alt="Urban Skater" 
                    className="relative w-full h-[600px] object-cover grayscale contrast-125 brightness-75 border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute bottom-10 -left-10 bg-black p-6 border border-zinc-800 shadow-2xl z-20 hidden md:block">
                    <span className="block text-red-600 text-xs font-bold uppercase tracking-widest mb-2">Candidate Profile: The Architect</span>
                    <div className="space-y-1 text-sm text-gray-300 font-mono">
                        <p>Status: <span className="text-green-500">DEPLOYED</span></p>
                        <p>Role: Senior React Engineer</p>
                        <p>Location: Buenos Aires (GMT-3)</p>
                        <p>Cost: 40% less than US equivalent</p>
                    </div>
                    </div>
                </div>
             </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;