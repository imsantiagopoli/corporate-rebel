import React, { useState } from 'react';
import { decodeCorporateSpeak } from '../services/geminiService';
import { Terminal, RefreshCcw } from 'lucide-react';
import Reveal from './Reveal';

const Decoder: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDecode = async () => {
    if (!input.trim()) return;
    setLoading(true);
    const result = await decodeCorporateSpeak(input);
    setOutput(result);
    setLoading(false);
  };

  return (
    <section id="decoder" className="py-24 bg-zinc-900 border-t border-b border-zinc-800">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <Reveal>
                <h2 className="text-red-600 text-sm font-bold tracking-[0.2em] uppercase mb-4">Internal Protocol</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white uppercase mb-6">
                Newspeak <br/> Decoder
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                Words create reality. If we speak like a boring corporation, we become one.
                Use this tool to translate "Corporate BS" into "Rebel Truth".
                </p>
                <div className="space-y-4">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold">Try typing:</p>
                <div className="flex flex-wrap gap-2">
                    {["Synergy", "Let's touch base", "We are a family", "Competitive salary"].map((tag) => (
                    <button 
                        key={tag}
                        onClick={() => setInput(tag)}
                        className="px-3 py-1 border border-zinc-700 text-zinc-400 text-xs uppercase hover:border-red-500 hover:text-white transition-colors"
                    >
                        {tag}
                    </button>
                    ))}
                </div>
                </div>
            </Reveal>
          </div>

          <Reveal delay={200} width="100%">
            <div className="bg-black border border-zinc-700 p-2 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-transparent to-red-600 opacity-50"></div>
                <div className="p-4 flex items-center justify-between border-b border-zinc-800 mb-4 bg-zinc-900/50">
                    <div className="flex items-center space-x-2 text-gray-500">
                        <Terminal size={16} />
                        <span className="text-xs font-mono">bash --decoder</span>
                    </div>
                    <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-red-600"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                        <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    </div>
                </div>
                
                <div className="p-4 space-y-6">
                    <div>
                        <label className="block text-xs text-gray-500 uppercase mb-2 font-mono">Input Jargon >_</label>
                        <textarea 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Paste corporate email here..."
                            className="w-full bg-transparent border-b border-zinc-700 text-white font-mono text-sm focus:outline-none focus:border-red-600 h-20 resize-none placeholder-zinc-700"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button 
                            onClick={handleDecode}
                            disabled={loading || !input}
                            className="flex items-center px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-gray-200 disabled:opacity-50 transition-colors"
                        >
                            {loading ? <RefreshCcw className="animate-spin mr-2" size={14}/> : null}
                            {loading ? 'Decrypting...' : 'Translate to Truth'}
                        </button>
                    </div>

                    <div className="min-h-[100px] border border-zinc-800 bg-zinc-900/30 p-4 relative">
                        <label className="absolute -top-2 left-2 bg-black px-2 text-xs text-red-500 font-mono uppercase">Output</label>
                        {output ? (
                            <p className="text-red-500 font-mono text-lg animate-pulse">
                                "{output}"
                            </p>
                        ) : (
                            <span className="text-zinc-700 font-mono text-sm">Waiting for input...</span>
                        )}
                    </div>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Decoder;