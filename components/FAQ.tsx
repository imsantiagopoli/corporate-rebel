import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-zinc-900 border-t border-b border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
                <div className="flex items-center space-x-2 mb-4">
                  <HelpCircle className="text-red-600" size={20} />
                  <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase">Intelligence Briefing</h2>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                Frequently Asked <br/> Questions
                </h3>
                <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                You have questions. We have answers. No corporate fluff, just the operational reality of building high-performance remote teams.
                </p>
                <div className="p-6 border border-zinc-800 bg-black/50">
                   <h4 className="text-white font-bold uppercase mb-2">Need direct clearance?</h4>
                   <p className="text-gray-500 text-sm mb-4">Skip the FAQ and talk to an Operations Director.</p>
                   <a href="#contact" className="text-red-600 font-bold uppercase text-sm tracking-widest hover:text-white transition-colors">
                     Contact Command &rarr;
                   </a>
                </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <Reveal key={idx} delay={idx * 100} width="100%">
                <div 
                  className={`border transition-all duration-300 ${openIndex === idx ? 'border-red-600 bg-black' : 'border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900'}`}
                >
                  <button 
                    onClick={() => toggleFAQ(idx)}
                    className="w-full text-left p-6 flex items-center justify-between group"
                  >
                    <span className={`font-bold uppercase tracking-wide text-sm md:text-base ${openIndex === idx ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                      {faq.question}
                    </span>
                    <span className="text-red-600 ml-4">
                      {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-gray-400 leading-relaxed text-sm md:text-base border-t border-dashed border-zinc-800/50 mt-2">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;