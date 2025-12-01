import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-zinc-900">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h4 className="text-2xl font-bold text-white tracking-tighter uppercase mb-2">The Corporate Rebel</h4>
          <p 
            className="text-zinc-600 text-xs uppercase tracking-widest glitch-text w-fit mx-auto md:mx-0" 
            data-text="Est. 2025 // Controlled Chaos"
          >
            Est. 2025 // Controlled Chaos
          </p>
        </div>
        
        <ul className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-sm font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="text-center md:text-right">
           <p className="text-zinc-700 text-sm font-mono">
             Are you brave enough?
           </p>
           <a href="mailto:escape@corporaterebel.com" className="text-red-600 hover:text-red-500 text-lg font-bold">
             escape@corporaterebel.com
           </a>
        </div>
      </div>
      <div className="text-center mt-12 text-zinc-800 text-xs">
         &copy; {new Date().getFullYear()} CONTROLLED CHAOS. ALL RIGHTS RESERVED. DO NOT COMPLY.
      </div>
    </footer>
  );
};

export default Footer;