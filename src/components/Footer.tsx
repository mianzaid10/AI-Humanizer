import { Sparkles } from 'lucide-react';

const footerLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#7C5CFC] to-[#A78BFA] flex items-center justify-center">
              <Sparkles className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-[Space_Grotesk] font-bold text-sm text-[#F0EEF9]">
              Free AI Humanizer
            </span>
          </div>

          <ul className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#65617E] hover:text-[#9B97B8] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-xs text-[#65617E]">
            © 2026 Free AI Humanizer. Make AI text sound human — free, instant, no login.
          </p>
          <p className="text-xs text-[#65617E]/60 mt-1">Created by Mian Zaid</p>
        </div>
      </div>
    </footer>
  );
}
