import React from 'react';
import { COMPARISON_POINTS } from '../constants';
import { X, Check } from 'lucide-react';
import Reveal from './Reveal';

const Comparison: React.FC = () => {
  return (
    <section id="comparison" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <Reveal>
             <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">The Divide</h2>
             <h3 className="text-4xl md:text-5xl font-bold text-white uppercase">Old World vs. New World</h3>
             <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                Traditional agencies optimize for their convenience. We optimize for your velocity.
             </p>
          </Reveal>
        </div>

        <Reveal>
            <div className="grid md:grid-cols-3 gap-0 border border-zinc-800 shadow-2xl">
                {/* Header Column for Desktops */}
                <div className="hidden md:flex flex-col p-8 bg-black border-b md:border-b-0 md:border-r border-zinc-800 justify-center">
                    <span className="text-gray-500 font-mono text-sm uppercase tracking-widest">Selection Criteria</span>
                </div>
                
                {/* Traditional Header */}
                <div className="p-8 bg-zinc-900/50 border-b md:border-b-0 md:border-r border-zinc-800">
                    <h4 className="text-xl font-bold text-gray-500 uppercase mb-2">Traditional Agency</h4>
                    <p className="text-xs text-gray-600 uppercase tracking-widest">The "Safe" Choice</p>
                </div>
                
                {/* Rebel Header */}
                <div className="p-8 bg-black relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-3xl"></div>
                    <h4 className="text-xl font-bold text-white uppercase mb-2">The Corporate Rebel</h4>
                    <p className="text-xs text-red-600 uppercase tracking-widest font-bold">The Strategic Choice</p>
                </div>

                {/* Rows */}
                {COMPARISON_POINTS.map((point, idx) => (
                    <React.Fragment key={idx}>
                        {/* Metric Name */}
                        <div className="p-6 md:p-8 bg-black border-t border-zinc-800 flex items-center justify-between md:justify-center">
                            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest md:hidden">Metric</span>
                            <span className="text-gray-300 font-bold uppercase text-sm md:text-base tracking-wide">{point.metric}</span>
                        </div>
                        
                        {/* Traditional Value */}
                        <div className="p-6 md:p-8 bg-zinc-900/30 border-t md:border-r border-zinc-800 flex items-start space-x-4">
                            <X className="text-zinc-600 mt-1 shrink-0" size={18} />
                            <span className="text-gray-500 text-sm leading-relaxed">{point.traditional}</span>
                        </div>

                        {/* Rebel Value */}
                        <div className="p-6 md:p-8 bg-black border-t border-zinc-800 flex items-start space-x-4 relative group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Check className="text-red-600 mt-1 shrink-0" size={18} />
                            <span className="text-white text-sm font-bold leading-relaxed">{point.rebel}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Comparison;