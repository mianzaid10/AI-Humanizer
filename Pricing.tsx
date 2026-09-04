import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    icon: Zap,
    price: '$0',
    period: 'forever',
    features: ['500 words / day', 'Standard mode', 'Basic support', 'No signup required', 'Community access'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Pro',
    icon: Crown,
    price: '$12',
    period: 'per month',
    features: ['Unlimited words', 'All 3 modes', '50+ languages', 'Priority support', 'API access', 'No watermarks'],
    cta: 'Get Pro',
    featured: true,
  },
  {
    name: 'Team',
    icon: Building2,
    price: '$39',
    period: 'per month',
    features: ['Everything in Pro', 'Up to 10 seats', 'Team dashboard', 'SSO & SAML', 'Dedicated manager', 'Custom integrations'],
    cta: 'Get Team',
    featured: false,
  },
];

const comparison = [
  { feature: 'Words per day', free: '500', pro: 'Unlimited', team: 'Unlimited' },
  { feature: 'Humanizer modes', free: 'Standard', pro: 'All 3', team: 'All 3' },
  { feature: 'Languages', free: '5', pro: '50+', team: '50+' },
  { feature: 'AI Detection bypass', free: '✓', pro: '✓', team: '✓' },
  { feature: 'API access', free: '—', pro: '✓', team: '✓' },
  { feature: 'Priority support', free: '—', pro: '✓', team: '✓' },
  { feature: 'Team seats', free: '1', pro: '1', team: '10' },
  { feature: 'SSO / SAML', free: '—', pro: '—', team: '✓' },
];

export default function Pricing() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Pricing</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Simple, <span className="gradient-text">honest</span> pricing</h1>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Start free, upgrade when you need more. No hidden fees, no surprises.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                plan.featured
                  ? 'bg-gradient-to-b from-[#a855f7]/[0.06] to-[#13131f] border-[#a855f7]/30 hover:border-[#a855f7]/50'
                  : 'bg-[#13131f] border-white/[0.05] hover:border-white/[0.1]'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white text-[10px] font-bold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />Most popular
                  </div>
                </div>
              )}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: plan.featured ? '#a855f715' : 'rgba(255,255,255,0.03)' }}>
                <plan.icon className="w-5 h-5" style={{ color: plan.featured ? '#a855f7' : '#94a3b8' }} />
              </div>
              <div className="mb-6">
                <span className="text-sm font-semibold text-[#94a3b8] uppercase tracking-wider">{plan.name}</span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-[Space_Grotesk] text-4xl font-bold text-[#f1f5f9]">{plan.price}</span>
                </div>
                <span className="text-sm text-[#64748b]">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#94a3b8]">
                    <Check className="w-4 h-4 text-[#22c55e] shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                plan.featured
                  ? 'bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white hover:shadow-lg hover:shadow-[#a855f7]/20 hover:-translate-y-0.5'
                  : 'bg-white/[0.04] text-[#f1f5f9] border border-white/[0.06] hover:bg-white/[0.08] hover:border-white/[0.1]'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-[Space_Grotesk] text-2xl font-bold text-center mb-8">Feature <span className="gradient-text">Comparison</span></h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-4 px-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Feature</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Free</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-[#c084fc] uppercase tracking-wider">Pro</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-[#64748b] uppercase tracking-wider">Team</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.03] hover:bg-white/[0.01] transition-colors">
                    <td className="py-3.5 px-4 text-sm text-[#94a3b8]">{row.feature}</td>
                    <td className="py-3.5 px-4 text-sm text-[#64748b] text-center">{row.free}</td>
                    <td className="py-3.5 px-4 text-sm text-[#f1f5f9] text-center font-medium">{row.pro}</td>
                    <td className="py-3.5 px-4 text-sm text-[#64748b] text-center">{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
