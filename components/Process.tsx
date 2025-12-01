import React from 'react';
import { PROCESS_STEPS } from '../constants';
import Reveal from './Reveal';

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <Reveal>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                <div>
                    <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">The Protocol</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase">How We Infiltrate</h3>
                </div>
                <div className="mt-6 md:mt-0 max-w-md text-right text-gray-500 text-sm">
                    Standard hiring takes 45 days. <br/> We operate on a 7-day sprint cycle.
                </div>
            </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, idx) => (
                <Reveal key={idx} delay={idx * 200} width="100%">
                    <div className="relative pt-8 border-t border-zinc-800">
                        <span className="absolute -top-3 left-0 bg-zinc-950 pr-4 text-zinc-700 font-mono text-xl font-bold">
                            {step.step}
                        </span>
                        <h4 className="text-xl font-bold text-white uppercase mb-4 mt-2">{step.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                </Reveal>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Process;