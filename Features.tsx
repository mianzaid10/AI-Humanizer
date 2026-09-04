import { motion } from 'framer-motion';
import { Shield, Brain, Globe, Target, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Bypasses all AI detectors',
    desc: 'Tested against GPTZero, Turnitin, Originality.ai, Copyleaks, and Winston AI — 99%+ bypass rate consistently.',
    badge: 'Core feature',
    color: '#7C5CFC',
  },
  {
    icon: Brain,
    title: 'Preserves meaning perfectly',
    desc: 'Your original ideas, facts, and arguments stay intact. We only change how they are expressed, never what they say.',
    color: '#A78BFA',
  },
  {
    icon: Globe,
    title: '50+ languages supported',
    desc: 'Humanize text in English, Spanish, French, German, Arabic, Hindi, Chinese, Japanese, Portuguese, and more.',
    badge: 'Global',
    color: '#60A5FA',
  },
  {
    icon: Target,
    title: 'Three tone control modes',
    desc: 'Choose Standard for everyday content, Aggressive for maximum humanization, or Academic for scholarly writing.',
    color: '#34D399',
  },
  {
    icon: Zap,
    title: 'Under 3 seconds per conversion',
    desc: 'Even long documents convert instantly. No waiting, no queues. Powered by Groq for lightning-fast inference.',
    color: '#FBBF24',
  },
  {
    icon: Lock,
    title: 'Private & secure by design',
    desc: 'Your text is never stored, logged, or shared. Inputs are processed in memory and deleted immediately after.',
    badge: 'Zero data retention',
    color: '#F87171',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 px-4 sm:px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em] mb-3">
            Features
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for <span className="gradient-text">real writers</span>
          </h2>
          <p className="text-[#9B97B8] max-w-lg mx-auto">
            Everything you need to make AI text undetectable, natural, and authentically human.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight-card group relative bg-[#111120] border border-white/[0.06] rounded-2xl p-7 card-lift"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `${feature.color}15` }}
              >
                <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
              </div>

              <h3 className="text-base font-semibold text-[#F0EEF9] mb-2.5">{feature.title}</h3>
              <p className="text-sm text-[#9B97B8] leading-relaxed mb-4">{feature.desc}</p>

              {feature.badge && (
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                  style={{
                    background: `${feature.color}12`,
                    color: feature.color,
                    border: `1px solid ${feature.color}20`,
                  }}
                >
                  {feature.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-[#A78BFA]">
            ✨ Trusted by 5,000+ students, writers, and content creators worldwide
          </p>
        </motion.div>
      </div>
    </section>
  );
}
