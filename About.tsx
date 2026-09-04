import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const stats = [
  { value: '500K+', label: 'Active users' },
  { value: '10M+', label: 'Texts humanized' },
  { value: '99.2%', label: 'Bypass rate' },
  { value: '50+', label: 'Languages' },
];

const values = [
  { icon: Target, title: 'Mission', desc: 'To democratize access to AI humanization tools, making them free, fast, and accessible to everyone who needs them.', color: '#a855f7' },
  { icon: Eye, title: 'Vision', desc: 'A world where AI-assisted writing is indistinguishable from human writing, empowering creators without fear of detection.', color: '#06b6d4' },
  { icon: Heart, title: 'Values', desc: 'Privacy first, zero data retention, transparent pricing, and a commitment to keeping our core tool free forever.', color: '#f472b6' },
];

const team = [
  { name: 'Mian Zaid', role: 'Founder & Developer', initials: 'MZ', color: '#a855f7' },
  { name: 'Sarah Chen', role: 'Head of Research', initials: 'SC', color: '#06b6d4' },
  { name: 'James Wilson', role: 'Lead Engineer', initials: 'JW', color: '#22c55e' },
  { name: 'Priya Sharma', role: 'Content Strategist', initials: 'PS', color: '#f59e0b' },
];

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">About Us</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Making AI text <span className="gradient-text">authentically human</span></h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto">Free AI Humanizer was built by writers, for writers. We believe everyone deserves access to tools that make their work sound natural and pass every detector.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 card">
              <div className="font-[Space_Grotesk] text-3xl font-bold text-[#f1f5f9] mb-1">{s.value}</div>
              <div className="text-xs text-[#64748b] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="spotlight card p-8"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`); }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: `${v.color}15` }}>
                <v.icon className="w-5 h-5" style={{ color: v.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-3">{v.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold text-center mb-10">Meet the <span className="gradient-text">team</span></h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4" style={{ background: `${member.color}15`, color: member.color }}>
                  {member.initials}
                </div>
                <h3 className="text-base font-semibold text-[#f1f5f9] mb-1">{member.name}</h3>
                <p className="text-xs text-[#64748b]">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 card p-8 md:p-12 text-center">
          <h2 className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold mb-4">Our <span className="gradient-text">Story</span></h2>
          <div className="max-w-2xl mx-auto space-y-4 text-sm text-[#94a3b8] leading-relaxed">
            <p>Free AI Humanizer started in 2024 when our founder, Mian Zaid, faced a common problem: AI-generated content was getting flagged by detectors, but existing humanizers were either too expensive or didn't work well enough.</p>
            <p>What began as a personal tool quickly grew into something much bigger. Today, over 500,000 writers, students, and content creators trust Free AI Humanizer to make their work sound authentically human.</p>
            <p>We are committed to keeping our core humanizer free forever. No signup, no credit card, no data retention. Just paste your text and get human-sounding results in seconds.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
