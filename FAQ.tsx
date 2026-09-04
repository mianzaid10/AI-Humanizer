import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const faqs = [
  {
    category: 'General',
    items: [
      { q: 'Does it really bypass Turnitin and GPTZero?', a: 'Yes — we test against all major detectors weekly including Turnitin, GPTZero, Originality.ai, Copyleaks, and Winston AI. 99%+ pass undetected in Standard mode.' },
      { q: 'Will the meaning of my text change?', a: 'No. All facts, arguments, citations, and key points are preserved exactly. We only change the expression, vocabulary, and sentence structure to sound more natural and human.' },
      { q: 'Is my text stored or shared?', a: 'Never. Your input is processed entirely in memory and deleted immediately after conversion. We do not log, store, or train on any user data. Your privacy is our top priority.' },
      { q: 'Which AI tools does it work with?', a: 'ChatGPT, Claude, Gemini, Grok, Llama, Copilot, Jasper, DeepSeek, Perplexity, and literally any AI-generated text. If a machine wrote it, we can humanize it.' },
    ],
  },
  {
    category: 'Pricing & Plans',
    items: [
      { q: 'Is there a word limit on the Free plan?', a: 'The free plan allows 500 words per day. Pro accounts get unlimited conversions with no restrictions. Team plans include up to 10 seats with shared usage.' },
      { q: 'Can I cancel my subscription anytime?', a: 'Absolutely. You can cancel your Pro or Team subscription at any time with no cancellation fees. Your access continues until the end of your billing period.' },
      { q: 'Do you offer refunds?', a: 'Yes, we offer a 7-day money-back guarantee for all paid plans. If you are not satisfied, contact us within 7 days for a full refund.' },
    ],
  },
  {
    category: 'Usage & Features',
    items: [
      { q: 'How is this different from a paraphrasing tool?', a: 'Unlike basic paraphrasers that just swap synonyms, our AI humanizer restructures sentences, varies lengths, adds natural imperfections, and mimics authentic human writing patterns to bypass detection.' },
      { q: 'Can I use this for academic papers?', a: 'Yes — our Academic mode is specifically designed for scholarly writing. It maintains formal tone while removing AI fingerprints that detectors flag.' },
      { q: 'What languages are supported?', a: 'We support 50+ languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Russian, Arabic, Hindi, Chinese, Japanese, Korean, and more.' },
      { q: 'How fast is the humanization process?', a: 'Most texts are humanized in under 3 seconds. Longer documents (2000+ words) may take 5-10 seconds. We use Groq for lightning-fast inference.' },
    ],
  },
  {
    category: 'Security & Privacy',
    items: [
      { q: 'Is my data encrypted?', a: 'Yes, all data transmitted to and from our servers is encrypted using TLS 1.3. We never store your text on disk — everything is processed in volatile memory.' },
      { q: 'Do you sell user data?', a: 'Never. We do not sell, rent, or share user data with third parties. Our business model is based on subscriptions, not data monetization.' },
      { q: 'Are you GDPR compliant?', a: 'Yes, we are fully GDPR compliant. Users in the EU can request data deletion at any time by contacting our support team.' },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>('0-0');

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">FAQ</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Common <span className="gradient-text">questions</span></h1>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Everything you need to know about Free AI Humanizer. Can't find what you're looking for? Contact us.</p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((section, si) => (
            <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-lg font-semibold text-[#f1f5f9] mb-5 flex items-center gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-[#a855f7] to-transparent" />
                {section.category}
              </h2>
              <div className="space-y-0">
                {section.items.map((item, ii) => {
                  const key = `${si}-${ii}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key} className="border-b border-white/[0.04]">
                      <button onClick={() => setOpenIndex(isOpen ? null : key)} className="w-full flex items-center justify-between gap-4 py-5 text-left group">
                        <span className="text-sm font-semibold text-[#f1f5f9] group-hover:text-[#c084fc] transition-colors">{item.q}</span>
                        <div className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-[#a855f7]/20 rotate-45' : 'bg-white/[0.03]'}`}>
                          <Plus className={`w-4 h-4 transition-colors ${isOpen ? 'text-[#a855f7]' : 'text-[#64748b]'}`} />
                        </div>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                            <p className="pb-5 text-sm text-[#94a3b8] leading-relaxed">{item.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
