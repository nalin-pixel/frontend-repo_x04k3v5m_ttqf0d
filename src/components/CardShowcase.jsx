import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Card = ({ i, featured }) => (
  <motion.div
    initial={{ opacity: 0, y: 30, rotate: featured ? 0 : i === 0 ? -6 : 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: i * 0.15 }}
    className={`relative aspect-[3/4] w-64 md:w-72 lg:w-80 rounded-2xl border ${
      featured ? 'border-fuchsia-400/40' : 'border-fuchsia-400/20'
    } bg-gradient-to-br from-[#140b1f] via-[#0d0715] to-black shadow-[0_0_60px_rgba(168,85,247,0.25)] overflow-hidden`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_55%)]" />
    <div className="absolute inset-[10px] rounded-xl border border-fuchsia-500/30" />
    <div className="absolute top-3 right-3 text-[10px] tracking-widest text-fuchsia-200/70">KAMUI</div>
    <div className="absolute bottom-3 left-3 text-xs text-fuchsia-100/80">Arcane Sigil</div>
  </motion.div>
);

const CardShowcase = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="community" ref={ref} className="relative py-24 md:py-36 bg-[#07050b]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.12),transparent_60%)]" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-4xl font-semibold text-fuchsia-100">Cards From The Void</h3>
          <p className="mt-3 text-fuchsia-200/70">Glowing edges. Metallic accents. Designed for clarity.</p>
        </div>

        <motion.div style={{ x }} className="flex items-center justify-center gap-6 md:gap-10">
          <Card i={0} />
          <Card i={1} featured />
          <Card i={2} />
        </motion.div>

        {/* Detail view */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 mx-auto max-w-3xl rounded-2xl border border-fuchsia-500/20 bg-gradient-to-br from-[#0f0a18] to-[#07040b] p-8 text-fuchsia-100/90"
        >
          <h4 className="text-xl font-semibold">Arcane Sigil</h4>
          <p className="mt-2 text-fuchsia-200/70">
            Channel ethereal energy to bend the battlefield. On draw: reveal the top card; if it is Arcane, empower this card and gain +1 tempo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CardShowcase;
