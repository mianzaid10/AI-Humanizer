import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const comparisons = [
  {
    before:
      'The utilization of renewable energy sources is of paramount importance in mitigating the adverse effects of climate change on global ecosystems and ensuring the sustainability of environmental resources for future generations.',
    after:
      "Switching to renewable energy matters more than ever right now — not just for the planet, but for the people who'll inherit it. Climate change isn't a distant threat, and the choices we make today will shape what future generations actually have to work with.",
  },
  {
    before:
      'Furthermore, the implementation of comprehensive digital literacy programs within educational institutions is essential for equipping students with the requisite skills to navigate an increasingly technology-driven society.',
    after:
      "Schools need to teach kids how to actually use technology, not just memorize facts. Digital literacy isn't optional anymore — it's as basic as reading and writing. Students who don't get this will be left behind.",
  },
  {
    before:
      'Moreover, it is crucial to acknowledge that the proliferation of artificial intelligence technologies necessitates the establishment of robust ethical frameworks to govern their deployment across various sectors.',
    after:
      "AI is everywhere now, and honestly? We need some ground rules. It's not about stopping innovation — it's about making sure these tools don't run wild without anyone thinking about the consequences.",
  },
];

export default function CompareSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative z-10 px-4 sm:px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em] mb-3">
            Before & After
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See the <span className="gradient-text">difference</span>
          </h2>
        </motion.div>

        {/* Tab selector */}
        <div className="flex justify-center gap-2 mb-10">
          {comparisons.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-10 h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] w-16'
                  : 'bg-white/[0.08] hover:bg-white/[0.15]'
              }`}
            />
          ))}
        </div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Before */}
          <div className="group relative bg-[#F87171]/[0.04] border border-[#F87171]/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#F87171]/50 to-transparent" />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#F87171]/10 flex items-center justify-center">
                <X className="w-3.5 h-3.5 text-[#F87171]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F87171]">
                AI-Written
              </span>
            </div>
            <p className="text-sm text-[#9B97B8] leading-[1.85]">
              {comparisons[activeIndex].before}
            </p>
          </div>

          {/* After */}
          <div className="group relative bg-[#34D399]/[0.04] border border-[#34D399]/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#34D399]/50 to-transparent" />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#34D399]/10 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-[#34D399]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#34D399]">
                Humanized
              </span>
            </div>
            <p className="text-sm text-[#9B97B8] leading-[1.85]">
              {comparisons[activeIndex].after}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
