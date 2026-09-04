import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Globe, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Zap, value: '99.2%', label: 'Bypass rate' },
  { icon: Globe, value: '50+', label: 'Languages' },
  { icon: Clock, value: '< 3s', label: 'Per conversion' },
  { icon: Users, value: '500K+', label: 'Users' },
];

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [display, setDisplay] = useState('0');
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
          const prefix = target.match(/^[^0-9.]*/)?.[0] || '';
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = numeric * eased;
            if (target.includes('.')) {
              setDisplay(prefix + current.toFixed(1) + suffix);
            } else {
              setDisplay(prefix + Math.floor(current) + suffix);
            }
            if (progress < 1) requestAnimationFrame(animate);
            else setDisplay(target + suffix);
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, suffix, hasAnimated]);

  return <span ref={ref}>{display}</span>;
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-16 overflow-hidden">
      {/* Mouse-following glow */}
      <div
        className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(124,92,252,0.3) 0%, transparent 70%)',
          left: mousePos.x - 250,
          top: mousePos.y - 250,
          transition: 'left 0.3s ease-out, top 0.3s ease-out',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#7C5CFC]/30 bg-[#7C5CFC]/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]" />
          </span>
          <span className="text-xs font-semibold text-[#A78BFA] uppercase tracking-wider">
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
          <span className="gradient-text glow-text">AI-generated text</span>
          <br className="hidden sm:block" /> into naturally{' '}
          <span className="relative">
            human writing
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
              <path
                d="M2 10C50 2 100 2 150 6C200 10 250 10 298 4"
                stroke="url(#underline)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                  <stop stopColor="#7C5CFC" />
                  <stop offset="1" stopColor="#A78BFA" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base sm:text-lg text-[#9B97B8] max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Paste any ChatGPT, Gemini, Claude, or DeepSeek output — get back fluid, natural prose that passes every AI detector including Turnitin, GPTZero, and Originality.ai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#demo"
            className="group relative overflow-hidden px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white font-semibold text-sm hover:shadow-2xl hover:shadow-[#7C5CFC]/25 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <SparklesIcon className="w-4 h-4" />
            Try it free — no signup
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how"
            className="px-8 py-4 rounded-xl border border-white/[0.12] text-[#9B97B8] font-medium text-sm hover:border-white/[0.2] hover:text-[#F0EEF9] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            See how it works
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="flex items-center gap-2 mb-1">
                <stat.icon className="w-4 h-4 text-[#7C5CFC]" />
                <span className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold text-[#F0EEF9]">
                  <AnimatedCounter target={stat.value} />
                </span>
              </div>
              <span className="text-xs text-[#65617E] font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-[#7C5CFC]" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
