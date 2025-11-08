import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const IntroKeyArt = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <section id="cards" ref={ref} className="relative bg-gradient-to-b from-black to-[#0b0611] py-24 md:py-36">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.15),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 style={{ opacity }} className="text-3xl md:text-5xl font-semibold tracking-tight text-fuchsia-100">
            A STRATEGIC CARD GAME
          </motion.h2>
          <motion.p style={{ opacity }} className="mt-4 text-fuchsia-200/70">
            Meticulous tactics. Mystical power. Multi-platform.
          </motion.p>
          <motion.div style={{ y, opacity }} className="mt-6 flex items-center justify-center gap-4 text-xs text-fuchsia-200/60 flex-wrap">
            {['macOS','Windows','Linux','iPhone','Android','iPad Pro'].map((p) => (
              <span key={p} className="rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 px-3 py-1">{p}</span>
            ))}
          </motion.div>
        </div>

        <div className="relative">
          {/* Key art placeholder using gradients and shapes to avoid external assets */}
          <motion.div style={{ y, opacity }} className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-[#0f0a18] via-[#120a21] to-[#07040b] shadow-[0_0_120px_rgba(168,85,247,0.25)]">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.25),transparent_35%)]" />
            {/* Kneeling character silhouette using CSS art */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-1/2">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent blur-2xl" />
              <div className="mx-auto h-full w-64 rounded-t-[40%] rounded-b-[20%] bg-gradient-to-b from-fuchsia-600/40 via-fuchsia-900/30 to-black/60 backdrop-blur-[2px]" />
            </div>
            {/* Candles */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center gap-6">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="relative h-16 w-4 rounded bg-gradient-to-b from-amber-100/80 to-amber-300/20"
                >
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-amber-400 blur-[2px]" />
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-amber-300/30 blur-lg animate-pulse" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntroKeyArt;
