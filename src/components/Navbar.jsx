import React from 'react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md/0 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-semibold tracking-widest text-fuchsia-300 hover:text-fuchsia-200 transition-colors">KAMUI</a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {['Home','Cards','Community','Esports','Twitch'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-fuchsia-100/80 hover:text-fuchsia-100 transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <a href="#" className="md:inline-flex hidden items-center rounded-full bg-fuchsia-500/20 px-4 py-1.5 text-fuchsia-100 border border-fuchsia-500/40 hover:bg-fuchsia-500/30 transition-colors">
            Wishlist
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
