import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xnjydgzd';

export default function Feedback() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const formData = new FormData();
      formData.append('name', name || 'Anonymous');
      formData.append('email', email || 'no-reply@user.com');
      formData.append('message', message);
      formData.append('_subject', 'Feedback from AI Humanizer');

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Formspree error');
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative z-10 px-4 sm:px-6 py-16">
      <div className="max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="bg-[#111120] border border-white/[0.06] rounded-2xl p-8"
        >
          <div className="text-center mb-6">
            <h3 className="font-[Space_Grotesk] text-xl font-bold text-[#F0EEF9] mb-2">
              Share Your Feedback
            </h3>
            <p className="text-sm text-[#9B97B8]">
              Help us improve! Your feedback means a lot to us.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name (Optional)"
              className="w-full px-4 py-3 rounded-xl bg-[#0A0A14] border border-white/[0.06] text-sm text-[#F0EEF9] placeholder-[#65617E] outline-none focus:border-[#7C5CFC]/50 transition-colors"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email (Optional)"
              className="w-full px-4 py-3 rounded-xl bg-[#0A0A14] border border-white/[0.06] text-sm text-[#F0EEF9] placeholder-[#65617E] outline-none focus:border-[#7C5CFC]/50 transition-colors"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Share your experience or suggestions..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-[#0A0A14] border border-white/[0.06] text-sm text-[#F0EEF9] placeholder-[#65617E] outline-none focus:border-[#7C5CFC]/50 transition-colors resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#7C5CFC]/20 transition-all duration-300 disabled:opacity-60"
            >
              <Send className="w-4 h-4" />
              {loading ? 'Sending...' : 'Send Feedback'}
            </button>
          </form>

          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#34D399]/10 border border-[#34D399]/20 text-sm text-[#34D399]"
              >
                <CheckCircle className="w-4 h-4 shrink-0" />
                Thank you! Your feedback has been sent.
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#F87171]/10 border border-[#F87171]/20 text-sm text-[#F87171]"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                Something went wrong. Please try again.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
