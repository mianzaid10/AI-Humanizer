import { Link } from 'react-router-dom';
import { Sparkles, Globe, MessageCircle, Mail } from 'lucide-react';

const footerLinks = {
  Product: [
    { label: 'AI Humanizer', href: '/tools' },
    { label: 'AI Detector', href: '/tools' },
    { label: 'Paraphraser', href: '/tools' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#a855f7] to-[#06b6d4] flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-[Space_Grotesk] font-bold text-lg text-[#f1f5f9]">
                Free AI Humanizer
              </span>
            </Link>
            <p className="text-sm text-[#64748b] leading-relaxed max-w-xs mb-6">
              Make AI text sound human — free, instant, no login. Trusted by 500,000+ writers worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] hover:border-white/[0.12] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] hover:border-white/[0.12] transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#64748b] hover:text-[#f1f5f9] hover:border-white/[0.12] transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#64748b] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#64748b]">
            © 2026 Free AI Humanizer. All rights reserved.
          </p>
          <p className="text-xs text-[#64748b]/60">Created by Mian Zaid</p>
        </div>
      </div>
    </footer>
  );
}
