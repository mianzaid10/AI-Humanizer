import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#111120] to-[#0A0A14] border border-[#7C5CFC]/20 p-10 sm:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C5CFC]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
              <span className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider">
                Start for free today
              </span>
            </motion.div>

            <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-5">
              Start writing like a{' '}
              <span className="gradient-text">human</span> again
            </h2>

            <p className="text-[#9B97B8] max-w-lg mx-auto mb-10">
              Join 500,000+ students, writers, and content creators who use Free AI Humanizer to make their work undetectable, natural, and authentically human.
            </p>

            <a
              href="#demo"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#7C5CFC]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              Try it free — no signup
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
