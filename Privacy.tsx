import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Legal</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl font-bold mb-4">Privacy <span className="gradient-text">Policy</span></h1>
          <p className="text-sm text-[#64748b]">Last updated: January 1, 2026</p>
        </motion.div>

        <div className="space-y-8 text-sm text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">1. Introduction</h2>
            <p>Free AI Humanizer ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and services. We believe privacy is a fundamental right, and we have designed our service with privacy at its core.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">2. Information We Do NOT Collect</h2>
            <p>We do not collect, store, or retain the text you input into our humanizer tool. All text processing happens in volatile memory and is permanently deleted immediately after conversion. We do not:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Store your input or output text</li>
              <li>Log your writing content</li>
              <li>Train AI models on your data</li>
              <li>Sell or share your data with third parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">3. Information We Collect</h2>
            <p>We only collect minimal information necessary to operate our service:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li><strong>Usage analytics:</strong> Anonymous page views and feature usage (no personal data)</li>
              <li><strong>Contact information:</strong> Only when you voluntarily submit our contact form</li>
              <li><strong>Payment information:</strong> Processed securely by our payment provider (Stripe). We never see your full card details.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">4. Cookies</h2>
            <p>We use essential cookies only to maintain your session and preferences. We do not use tracking cookies for advertising purposes. You can disable cookies in your browser, though some features may not work properly.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">5. Data Security</h2>
            <p>All data transmission uses TLS 1.3 encryption. Our servers are hosted in secure facilities with 24/7 monitoring. Despite these measures, no internet transmission is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">6. GDPR Compliance</h2>
            <p>If you are in the European Union, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at support@freeaihumanizer.online.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">7. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify users of significant changes via email or a notice on our website.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">8. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at support@freeaihumanizer.online.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
