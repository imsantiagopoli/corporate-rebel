import React from 'react';
import { ROLES } from '../constants';
import { Terminal, Palette, Settings, Database, Map, Target } from 'lucide-react';
import Reveal from './Reveal';

// Mapping icons to the 6 categories
const icons = [Terminal, Palette, Settings, Database, Map, Target];

const Roles: React.FC = () => {
  return (
    <section id="roles" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <Reveal>
             <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">Who We Deploy</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-white uppercase">The Operatives</h3>
             <p className="text-gray-400 mt-4 max-w-2xl">
                We don't do "general staffing." We specialize in six core units of high-growth companies.
             </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROLES.map((category, idx) => {
                const Icon = icons[idx] || Terminal;
                return (
                    <Reveal key={idx} delay={idx * 100} width="100%">
                        <div className="bg-zinc-900/30 border border-zinc-800 p-8 hover:bg-zinc-900 transition-colors group h-full">
                            <div className="mb-6 text-red-600 group-hover:text-white transition-colors">
                                <Icon size={40} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-bold text-white uppercase mb-2 tracking-wide">{category.category}</h4>
                            <p className="text-gray-500 text-sm mb-6 min-h-[48px]">{category.description}</p>
                            
                            <ul className="space-y-3">
                                {category.roles.map((role, rIdx) => (
                                    <li key={rIdx} className="flex items-center text-gray-300 font-mono text-sm border-b border-zinc-800/50 pb-2 last:border-0 hover:text-red-500 transition-colors cursor-default">
                                        <span className="w-1.5 h-1.5 bg-red-600 mr-3 rounded-full"></span>
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                );
            })}
        </div>
        
        <Reveal delay={300}>
            <div className="mt-16 text-center">
                <p className="text-zinc-500 text-sm uppercase tracking-widest mb-6">Don't see what you need?</p>
                <button className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors uppercase font-bold text-sm">
                    Request Custom Scouting &rarr;
                </button>
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Roles;