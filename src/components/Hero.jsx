import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mystical vibe - won't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.20),transparent_60%)]" />

      {/* Centered headline */}
      <div className="relative z-10 flex min-h-screen items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm tracking-[0.4em] text-fuchsia-300/80">A NEW VIBE</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-sky-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]">
            KAMUI
          </h1>
          <p className="mt-6 text-fuchsia-100/80 max-w-xl mx-auto">
            A dark, luxurious strategy card game where mysticism meets precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
