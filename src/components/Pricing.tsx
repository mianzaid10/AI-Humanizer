import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: ['500 words / day', 'Standard mode', 'Basic support', 'No signup required'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: 'per month',
    features: ['Unlimited words', 'All 3 modes', '50+ languages', 'Priority support', 'API access'],
    cta: 'Get Pro',
    featured: true,
  },
  {
    name: 'Team',
    price: '$39',
    period: 'per month',
    features: ['Everything in Pro', 'Up to 10 seats', 'Team dashboard', 'SSO & SAML', 'Dedicated account manager'],
    cta: 'Get Team',
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 px-4 sm:px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em] mb-3">
            Pricing
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">honest</span> pricing
          </h2>
          <p className="text-[#9B97B8] max-w-lg mx-auto">
            Start free, upgrade when you need more. No hidden fees, no surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#7C5CFC]/[0.08] to-[#111120] border-[#7C5CFC]/30 hover:border-[#7C5CFC]/50'
                  : 'bg-[#111120] border-white/[0.06] hover:border-white/[0.12]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    Most popular
                  </div>
                </div>
              )}

              <div className="mb-6">
                <span className="text-sm font-semibold text-[#9B97B8] uppercase tracking-wider">
                  {plan.name}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-[Space_Grotesk] text-4xl font-bold text-[#F0EEF9]">
                    {plan.price}
                  </span>
                </div>
                <span className="text-sm text-[#65617E]">{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-[#9B97B8]">
                    <Check className="w-4 h-4 text-[#34D399] shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  plan.featured
                    ? 'bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white hover:shadow-lg hover:shadow-[#7C5CFC]/20 hover:-translate-y-0.5'
                    : 'bg-white/[0.04] text-[#F0EEF9] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15]'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
