import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "My professor couldn't detect anything through Turnitin. The text actually read better than what I originally had from ChatGPT.",
    name: 'Sarah A.',
    role: 'Graduate student',
    initials: 'SA',
    color: '#7C5CFC',
    rating: 5,
  },
  {
    text: "Saves us hours of manual editing every week. The meaning always stays intact — it just sounds more human and engaging.",
    name: 'Marcus K.',
    role: 'Content agency owner',
    initials: 'MK',
    color: '#34D399',
    rating: 5,
  },
  {
    text: "The Academic mode is exactly what I needed for my research papers. My workflow is literally 3x faster now.",
    name: 'Priya R.',
    role: 'Freelance writer',
    initials: 'PR',
    color: '#FBBF24',
    rating: 5,
  },
  {
    text: "I was skeptical at first, but GPTZero went from 87% AI to 3% after humanizing. Absolutely incredible tool.",
    name: 'James T.',
    role: 'Undergraduate student',
    initials: 'JT',
    color: '#60A5FA',
    rating: 5,
  },
  {
    text: "We use this for all our client blog posts. The Aggressive mode produces the most natural-sounding content we've seen.",
    name: 'Elena M.',
    role: 'SEO specialist',
    initials: 'EM',
    color: '#F87171',
    rating: 5,
  },
  {
    text: "Free, no signup, and actually works. I've tried 10+ humanizers and this is the only one that consistently bypasses detectors.",
    name: 'David L.',
    role: 'Marketing manager',
    initials: 'DL',
    color: '#A78BFA',
    rating: 5,
  },
];

export default function Testimonials() {
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
            Reviews
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What people <span className="gradient-text">say</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
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
              <div className="flex gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24]" />
                ))}
              </div>

              <p className="text-sm text-[#9B97B8] leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold"
                  style={{ background: `${t.color}15`, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#F0EEF9]">{t.name}</div>
                  <div className="text-xs text-[#65617E]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
