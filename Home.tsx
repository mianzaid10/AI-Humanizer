import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, Zap, Globe, Clock, Users, Shield, Brain,
  Target, Lock, Sparkles, Check, Star,
  Wand2, FileText, Flame
} from 'lucide-react';

/* ─── Animated Counter ─── */
function Counter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [val, setVal] = useState('0');
  useEffect(() => {
    const num = parseFloat(target.replace(/[^0-9.]/g, ''));
    const prefix = target.match(/^[^0-9.]*/)?.[0] || '';
    const start = Date.now();
    const dur = 2000;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      const cur = target.includes('.') ? prefix + (num * e).toFixed(1) : prefix + Math.floor(num * e);
      setVal(cur + suffix);
      if (p < 1) requestAnimationFrame(tick);
      else { setVal(target + suffix); }
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, [target, suffix]);
  return <span>{val}</span>;
}

/* ─── Hero ─── */
function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div
        className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.25) 0%, transparent 70%)',
          left: mouse.x - 250, top: mouse.y - 250,
          transition: 'left 0.4s ease-out, top 0.4s ease-out',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
          </span>
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-wider">
            Trusted by 500,000+ writers worldwide
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-[Space_Grotesk] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          Turn{' '}
          <span className="gradient-text">AI-generated text</span>
          <br className="hidden sm:block" /> into{' '}
          <span className="relative">
            naturally human
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 280 10" fill="none">
              <path d="M2 8C60 2 140 2 278 4" stroke="url(#ul)" strokeWidth="2.5" strokeLinecap="round" />
              <defs><linearGradient id="ul" x1="0" y1="0" x2="280" y2="0"><stop stopColor="#a855f7" /><stop offset="1" stopColor="#06b6d4" /></linearGradient></defs>
            </svg>
          </span>{' '}
          writing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-[#94a3b8] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Paste any ChatGPT, Gemini, Claude, or DeepSeek output — get back fluid, natural prose that passes every AI detector including Turnitin, GPTZero, and Originality.ai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            to="/tools"
            className="group flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#a855f7]/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Wand2 className="w-4 h-4" />
            Try it free — no signup
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 rounded-xl border border-white/[0.08] text-[#94a3b8] font-medium text-sm hover:border-white/[0.15] hover:text-[#f1f5f9] transition-all duration-300 hover:-translate-y-0.5"
          >
            Learn more
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {[
            { icon: Zap, val: '99.2%', label: 'Bypass rate' },
            { icon: Globe, val: '50+', label: 'Languages' },
            { icon: Clock, val: '<3s', label: 'Per conversion' },
            { icon: Users, val: '500K+', label: 'Users' },
          ].map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.1 }} className="flex flex-col items-center">
              <div className="flex items-center gap-2 mb-1">
                <s.icon className="w-4 h-4 text-[#a855f7]" />
                <span className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold text-[#f1f5f9]"><Counter target={s.val} /></span>
              </div>
              <span className="text-xs text-[#64748b] font-medium">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="scroll-bounce w-6 h-10 rounded-full border-2 border-white/15 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#a855f7]" />
        </div>
      </motion.div>
    </section>
  );
}

/* ─── Trusted By ─── */
function TrustedBy() {
  const logos = ['Turnitin', 'GPTZero', 'Originality.ai', 'Copyleaks', 'Winston AI', 'Scribbr'];
  return (
    <section className="relative z-10 py-10 border-y border-white/[0.04] bg-white/[0.01]">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-xs text-[#64748b] uppercase tracking-wider mb-6">Bypasses these detectors</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((logo) => (
            <span key={logo} className="text-sm font-semibold text-[#64748b]/60 hover:text-[#94a3b8] transition-colors cursor-default">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Features ─── */
function Features() {
  const features = [
    { icon: Shield, title: 'Bypass All Detectors', desc: 'Tested against GPTZero, Turnitin, Originality.ai, Copyleaks, and Winston AI — 99%+ bypass rate.', badge: 'Core', color: '#a855f7' },
    { icon: Brain, title: 'Preserves Meaning', desc: 'Your original ideas, facts, and arguments stay intact. Only expression changes.', color: '#c084fc' },
    { icon: Globe, title: '50+ Languages', desc: 'Humanize text in English, Spanish, French, German, Arabic, Hindi, Chinese, and more.', badge: 'Global', color: '#06b6d4' },
    { icon: Target, title: 'Three Tone Modes', desc: 'Standard, Aggressive, and Academic modes for every writing need.', color: '#22c55e' },
    { icon: Zap, title: 'Under 3 Seconds', desc: 'Even long documents convert instantly. Powered by Groq for lightning-fast inference.', color: '#f59e0b' },
    { icon: Lock, title: 'Private & Secure', desc: 'Your text is never stored, logged, or shared. Zero data retention policy.', badge: 'Privacy', color: '#ef4444' },
  ];
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Features</span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Built for <span className="gradient-text">real writers</span></h2>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Everything you need to make AI text undetectable, natural, and authentically human.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight card p-7"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`); }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110" style={{ background: `${f.color}15` }}>
                <f.icon className="w-5 h-5" style={{ color: f.color }} />
              </div>
              <h3 className="text-base font-semibold text-[#f1f5f9] mb-2">{f.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">{f.desc}</p>
              {f.badge && <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md" style={{ background: `${f.color}12`, color: f.color, border: `1px solid ${f.color}20` }}>{f.badge}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    { num: '01', icon: FileText, title: 'Paste your AI text', desc: 'Copy any text from ChatGPT, Gemini, Claude, DeepSeek, or any AI tool into the editor.', color: '#a855f7' },
    { num: '02', icon: Flame, title: 'Choose your mode', desc: 'Select Standard, Aggressive, or Academic depending on your writing needs.', color: '#06b6d4' },
    { num: '03', icon: Sparkles, title: 'Copy & use instantly', desc: 'Get humanized text in under 3 seconds. Copy and use anywhere you need.', color: '#f472b6' },
  ];
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">How It Works</span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Three steps to <span className="gradient-text">human text</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: i * 0.15 }}
              className="spotlight card p-8"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`); }}
            >
              {i < 2 && <div className="hidden md:block absolute top-10 -right-3 w-6 h-px bg-gradient-to-r from-[#a855f7]/30 to-transparent z-10" />}
              <div className="flex items-center justify-between mb-6">
                <span className="font-[Space_Grotesk] text-5xl font-bold opacity-10" style={{ color: s.color }}>{s.num}</span>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${s.color}15` }}>
                  <s.icon className="w-5 h-5" style={{ color: s.color }} />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-[#f1f5f9] mb-3">{s.title}</h3>
              <p className="text-sm text-[#94a3b8] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Compare ─── */
function Compare() {
  const [idx, setIdx] = useState(0);
  const examples = [
    { before: 'The utilization of renewable energy sources is of paramount importance in mitigating the adverse effects of climate change on global ecosystems and ensuring the sustainability of environmental resources for future generations.', after: "Switching to renewable energy matters more than ever right now — not just for the planet, but for the people who'll inherit it. Climate change isn't a distant threat, and the choices we make today will shape what future generations actually have to work with." },
    { before: 'Furthermore, the implementation of comprehensive digital literacy programs within educational institutions is essential for equipping students with the requisite skills to navigate an increasingly technology-driven society.', after: "Schools need to teach kids how to actually use technology, not just memorize facts. Digital literacy isn't optional anymore — it's as basic as reading and writing. Students who don't get this will be left behind." },
    { before: 'Moreover, it is crucial to acknowledge that the proliferation of artificial intelligence technologies necessitates the establishment of robust ethical frameworks to govern their deployment across various sectors.', after: "AI is everywhere now, and honestly? We need some ground rules. It's not about stopping innovation — it's about making sure these tools don't run wild without anyone thinking about the consequences." },
  ];
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-14">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Before & After</span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">See the <span className="gradient-text">difference</span></h2>
        </motion.div>
        <div className="flex justify-center gap-2 mb-10">
          {examples.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`h-1.5 rounded-full transition-all duration-300 ${idx === i ? 'bg-gradient-to-r from-[#a855f7] to-[#06b6d4] w-14' : 'bg-white/[0.06] w-8 hover:bg-white/[0.12]'}`} />
          ))}
        </div>
        <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="grid md:grid-cols-2 gap-6">
          <div className="relative bg-[#ef4444]/[0.03] border border-[#ef4444]/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#ef4444]/50 to-transparent" />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#ef4444]/10 flex items-center justify-center"><XIcon className="w-3.5 h-3.5 text-[#ef4444]" /></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#ef4444]">AI-Written</span>
            </div>
            <p className="text-sm text-[#94a3b8] leading-[1.85]">{examples[idx].before}</p>
          </div>
          <div className="relative bg-[#22c55e]/[0.03] border border-[#22c55e]/10 rounded-2xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#22c55e]/50 to-transparent" />
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-6 rounded-full bg-[#22c55e]/10 flex items-center justify-center"><Check className="w-3.5 h-3.5 text-[#22c55e]" /></div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#22c55e]">Humanized</span>
            </div>
            <p className="text-sm text-[#94a3b8] leading-[1.85]">{examples[idx].after}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function XIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>;
}

/* ─── Testimonials ─── */
function Testimonials() {
  const items = [
    { text: "My professor couldn't detect anything through Turnitin. The text actually read better than what I originally had from ChatGPT.", name: 'Sarah A.', role: 'Graduate student', initials: 'SA', color: '#a855f7' },
    { text: "Saves us hours of manual editing every week. The meaning always stays intact — it just sounds more human and engaging.", name: 'Marcus K.', role: 'Content agency owner', initials: 'MK', color: '#22c55e' },
    { text: "The Academic mode is exactly what I needed for my research papers. My workflow is literally 3x faster now.", name: 'Priya R.', role: 'Freelance writer', initials: 'PR', color: '#f59e0b' },
    { text: "I was skeptical at first, but GPTZero went from 87% AI to 3% after humanizing. Absolutely incredible tool.", name: 'James T.', role: 'Undergraduate student', initials: 'JT', color: '#06b6d4' },
    { text: "We use this for all our client blog posts. The Aggressive mode produces the most natural-sounding content we've seen.", name: 'Elena M.', role: 'SEO specialist', initials: 'EM', color: '#ef4444' },
    { text: "Free, no signup, and actually works. I've tried 10+ humanizers and this is the only one that consistently bypasses detectors.", name: 'David L.', role: 'Marketing manager', initials: 'DL', color: '#c084fc' },
  ];
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Reviews</span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">What people <span className="gradient-text">say</span></h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight card p-7"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`); }}
            >
              <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#f59e0b] text-[#f59e0b]" />)}</div>
              <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${t.color}15`, color: t.color }}>{t.initials}</div>
                <div><div className="text-sm font-semibold text-[#f1f5f9]">{t.name}</div><div className="text-xs text-[#64748b]">{t.role}</div></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function CTA() {
  return (
    <section className="relative z-10 px-4 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#13131f] to-[#0a0a14] border border-[#a855f7]/15 p-10 sm:p-16 text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#a855f7]/8 rounded-full blur-[100px] pointer-events-none" />
          <div className="relative z-10">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#a855f7]/30 bg-[#a855f7]/10 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#c084fc]" />
              <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-wider">Start for free today</span>
            </motion.div>
            <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Start writing like a <span className="gradient-text">human</span> again</h2>
            <p className="text-[#94a3b8] max-w-lg mx-auto mb-10">Join 500,000+ students, writers, and content creators who use Free AI Humanizer to make their work undetectable and natural.</p>
            <Link to="/tools" className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#a855f7]/25 transition-all duration-300 hover:-translate-y-0.5">
              <Wand2 className="w-4 h-4" />
              Try it free — no signup
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Marquee Badges ─── */
function MarqueeBadges() {
  const badges = [
    { href: 'https://turbo0.com/item/ai-humanizer-tool', src: 'https://img.turbo0.com/badge-listed-light.svg', alt: 'Turbo0' },
    { href: 'https://thesaasdir.com/product/free-ai-humanizer?ref=badge', src: 'https://thesaasdir.com/badge/free-ai-humanizer.svg', alt: 'TheSaaSDir' },
    { href: 'https://aitoolslister.com/tools/ai-humanizer', src: 'https://aitoolslister.com/badges/listed-card-dark.svg', alt: 'AI Tools Lister' },
    { href: 'https://www.ai-visibility.org.uk/directory/verify/freeaihumanizer-online/', src: 'https://www.ai-visibility.org.uk/specifications/badges/essential.svg', alt: 'AI Visibility' },
    { href: 'https://startupdirectory.net', src: 'https://startupdirectory.net/badge/featured-light.svg', alt: 'StartupDirectory' },
    { href: 'https://aiagentsdirectory.com/agent/free-ai-humanizer', src: 'https://aiagentsdirectory.com/featured-badge.svg?v=2024', alt: 'AI Agents Directory' },
    { href: 'https://findly.tools/free-ai-humanizer?utm_source=free-ai-humanizer', src: 'https://findly.tools/badges/findly-tools-badge-dark.svg', alt: 'Findly.tools' },
    { href: 'https://dofollow.tools', src: 'https://dofollow.tools/badge/badge_dark.svg', alt: 'Dofollow.Tools' },
    { href: 'https://aitrustlist.com/?utm_source=freeaihumanizer.online', src: 'https://aitrustlist.com/badge-dark.svg', alt: 'AITrustList' },
    { href: 'https://launchumo.com', src: 'https://launchumo.com/images/badge.webp', alt: 'Launchumo' },
    { href: 'https://toolfame.com/item/free-ai-humanizer', src: 'https://toolfame.com/badge-dark.svg', alt: 'toolfame' },
    { href: 'https://tulimoa.com/discover/free-ai-humanizer', src: 'https://tulimoa.com/badge/dark.svg', alt: 'Tulimoa' },
    { href: 'https://indexof.ai/tool/free-ai-humanizer?ref=free-ai-humanizer', src: 'https://indexof.ai/badge-dark.svg', alt: 'IndexOf.AI' },
  ];
  const doubled = [...badges, ...badges];
  return (
    <section className="relative z-10 py-6 border-y border-white/[0.04] bg-white/[0.01] overflow-hidden">
      <div className="marquee-track">
        {doubled.map((b, i) => (
          <a key={i} href={b.href} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mx-6 opacity-40 hover:opacity-100 transition-opacity">
            <img src={b.src} alt={b.alt} className="h-7 w-auto" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Compare />
      <Testimonials />
      <CTA />
      <MarqueeBadges />
    </>
  );
}
