import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05050A]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="font-[Space_Grotesk] font-bold text-lg text-[#F0EEF9]">
              Free AI Humanizer
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#9B97B8] hover:text-[#F0EEF9] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#demo"
              className="relative overflow-hidden px-5 py-2 rounded-lg bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#7C5CFC]/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden text-[#F0EEF9] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A14]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-[#9B97B8] hover:text-[#F0EEF9] py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#demo"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white text-sm font-semibold"
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
