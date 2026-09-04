import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Legal</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl font-bold mb-4">Terms of <span className="gradient-text">Service</span></h1>
          <p className="text-sm text-[#64748b]">Last updated: January 1, 2026</p>
        </motion.div>

        <div className="space-y-8 text-sm text-[#94a3b8] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Free AI Humanizer ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">2. Description of Service</h2>
            <p>Free AI Humanizer provides AI text humanization tools designed to make AI-generated content sound more natural and human-like. We offer both free and paid subscription plans.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">3. User Responsibilities</h2>
            <p>You agree to use the Service only for lawful purposes. You are responsible for the content you submit and ensure you have the right to use and modify it. You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 ml-2">
              <li>Use the Service for illegal activities</li>
              <li>Submit content that infringes on others' intellectual property</li>
              <li>Attempt to reverse engineer or disrupt the Service</li>
              <li>Use automated scripts or bots to access the Service</li>
              <li>Resell or redistribute the Service without authorization</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">4. Account & Subscriptions</h2>
            <p>Paid subscriptions are billed in advance on a monthly basis. You can cancel anytime through your account settings. Refunds are available within 7 days of purchase. We reserve the right to modify pricing with 30 days notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">5. Intellectual Property</h2>
            <p>You retain all rights to the content you submit. We claim no ownership over your input or output text. The Free AI Humanizer name, logo, and website design are our intellectual property and may not be used without permission.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">6. Limitation of Liability</h2>
            <p>Free AI Humanizer is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the Service, including but not limited to academic penalties, legal consequences, or lost profits.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">7. Modifications to Terms</h2>
            <p>We may modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the new Terms. Significant changes will be communicated via email or website notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">8. Termination</h2>
            <p>We reserve the right to terminate or suspend your access to the Service for violations of these Terms. Upon termination, your right to use the Service ceases immediately.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">9. Governing Law</h2>
            <p>These Terms are governed by the laws of the jurisdiction in which Free AI Humanizer operates, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3">10. Contact</h2>
            <p>For questions about these Terms, contact us at support@freeaihumanizer.online.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
