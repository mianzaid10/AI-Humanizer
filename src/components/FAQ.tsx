import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'Does it really bypass Turnitin and GPTZero?',
    a: 'Yes — we test against all major detectors weekly including Turnitin, GPTZero, Originality.ai, Copyleaks, and Winston AI. 99%+ pass undetected in Standard mode, and Aggressive mode pushes that even higher.',
  },
  {
    q: 'Will the meaning of my text change?',
    a: 'No. All facts, arguments, citations, and key points are preserved exactly. We only change the expression, vocabulary, and sentence structure to sound more natural and human.',
  },
  {
    q: 'Is my text stored or shared?',
    a: 'Never. Your input is processed entirely in memory and deleted immediately after conversion. We do not log, store, or train on any user data. Your privacy is our top priority.',
  },
  {
    q: 'Which AI tools does it work with?',
    a: 'ChatGPT, Claude, Gemini, Grok, Llama, Copilot, Jasper, DeepSeek, Perplexity, and literally any AI-generated text. If a machine wrote it, we can humanize it.',
  },
  {
    q: 'Is there a word limit on the Free plan?',
    a: 'The free plan allows 500 words per day. Pro accounts get unlimited conversions with no restrictions. Team plans include up to 10 seats with shared usage.',
  },
  {
    q: 'How is this different from a paraphrasing tool?',
    a: 'Unlike basic paraphrasers that just swap synonyms, our AI humanizer restructures sentences, varies lengths, adds natural imperfections, and mimics authentic human writing patterns to bypass detection.',
  },
  {
    q: 'Can I use this for academic papers?',
    a: 'Yes — our Academic mode is specifically designed for scholarly writing. It maintains formal tone while removing AI fingerprints that detectors flag.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative z-10 px-4 sm:px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em] mb-3">
            FAQ
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Common <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-white/[0.06]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              >
                <span className="text-base font-semibold text-[#F0EEF9] group-hover:text-[#A78BFA] transition-colors">
                  {faq.q}
                </span>
                <div
                  className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    openIndex === i
                      ? 'bg-[#7C5CFC]/20 rotate-45'
                      : 'bg-white/[0.04]'
                  }`}
                >
                  <Plus
                    className={`w-4 h-4 transition-colors ${
                      openIndex === i ? 'text-[#7C5CFC]' : 'text-[#65617E]'
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-[#9B97B8] leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
