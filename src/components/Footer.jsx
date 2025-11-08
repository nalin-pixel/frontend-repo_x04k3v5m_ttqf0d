import React from 'react';

const Footer = () => {
  return (
    <footer id="twitch" className="relative bg-black/90 py-10 border-t border-fuchsia-500/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-fuchsia-200/60 text-sm">© {new Date().getFullYear()} KAMUI. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm">
          {['Privacy','Terms','Contact'].map((i) => (
            <a key={i} href="#" className="text-fuchsia-200/70 hover:text-fuchsia-100 transition-colors">{i}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
