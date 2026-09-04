import { motion } from 'framer-motion';

export default function ContentSection() {
  return (
    <section className="relative z-10 px-4 sm:px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[Space_Grotesk] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10">
            What Makes <span className="gradient-text">Free AI Humanizer</span> Different?
          </h2>

          <div className="space-y-6 text-[#9B97B8] leading-[1.85]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <strong className="text-[#F0EEF9]">Free AI Humanizer</strong> is a completely free tool designed to transform AI-generated text — whether from ChatGPT, Gemini, Claude, DeepSeek, or any other AI model — into natural, human-sounding content that bypasses even the most advanced AI detectors like Turnitin, GPTZero, Originality.ai, Copyleaks, and Winston AI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              Unlike other AI humanizers that charge high fees or compromise your privacy, our tool processes your text in memory only — <strong className="text-[#F0EEF9]">we never store or share your data</strong>. Within seconds, you get fluid, readable text that retains all your original meaning, facts, and arguments while sounding like a real person wrote it.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              With <strong className="text-[#F0EEF9]">three distinct modes</strong> — Standard for everyday content, Aggressive for maximum humanization, and Academic for scholarly writing — Free AI Humanizer adapts to your specific needs. Whether you're a student avoiding Turnitin flags, a content creator looking to bypass GPTZero, or a professional needing natural-sounding text, our tool delivers <strong className="text-[#F0EEF9]">99.2% detection bypass rate</strong> consistently.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              Best of all? <strong className="text-[#F0EEF9]">No sign-up required</strong>. No credit card. No hidden limits on the free plan (500 words/day). Just paste your AI text, click Humanize, and get human-quality writing instantly. That's why <strong className="text-[#F0EEF9]">500,000+ users</strong> trust Free AI Humanizer to make their work undetectable and authentic.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our technology goes beyond simple synonym swapping. We restructure sentences, vary sentence lengths, replace formal patterns with natural conversational flow, and apply human-like imperfections that AI detectors can't flag. The result? Text that doesn't just <em>look</em> human — it <em>reads</em> human. Try our free AI text humanizer today and experience the difference.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
