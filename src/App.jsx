import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroKeyArt from './components/IntroKeyArt';
import CardShowcase from './components/CardShowcase';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <Navbar />
      <main className="relative">
        <Hero />
        <IntroKeyArt />
        <CardShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default App;
