import React from 'react';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Roles from './components/Roles';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Comparison from './components/Comparison';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600 selection:text-black">
      <LoadingScreen />
      
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter uppercase">
            The <span className="text-red-600">Corporate</span> Rebel
          </div>
          <div className="hidden md:flex space-x-8">
             <a href="#manifesto" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Mission</a>
             <a href="#roles" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Talent</a>
             <a href="#comparison" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Why Us</a>
             <a href="#process" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Process</a>
             <a href="#arsenal" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Pricing</a>
          </div>
          <a href="#contact" className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all">
            Hire Now
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Manifesto />
        <Roles />
        <Comparison />
        <Process />
        <Services />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;