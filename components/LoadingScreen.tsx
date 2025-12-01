import React, { useEffect, useState } from 'react';

const LoadingScreen: React.FC = () => {
  const [shouldRender, setShouldRender] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    // Start animation out after 1.8s
    const timer1 = setTimeout(() => {
      setAnimateOut(true);
    }, 1800);

    // Remove from DOM after animation completes
    const timer2 = setTimeout(() => {
      setShouldRender(false);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-transform duration-700 ease-in-out ${
        animateOut ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-2 mb-4">
             <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
             <div className="w-2 h-2 bg-red-600 animate-pulse delay-75"></div>
             <div className="w-2 h-2 bg-red-600 animate-pulse delay-150"></div>
        </div>
        <h1 className="text-3xl font-bold text-white tracking-widest uppercase glitch-text" data-text="INITIALIZING...">
            INITIALIZING...
        </h1>
        <p className="text-red-600 font-mono text-xs mt-2 uppercase tracking-[0.3em]">
            Breaching Protocol V.3
        </p>
        
        <div className="w-64 h-1 bg-zinc-800 mt-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-red-600 w-full animate-loading-bar"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes loading-bar {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
            animation: loading-bar 1.5s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;