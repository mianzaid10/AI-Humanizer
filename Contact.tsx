import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const FORMSPREE_URL = 'https://formspree.io/f/xnjydgzd';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !email.trim()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }
    setLoading(true);
    setStatus('idle');
    try {
      const formData = new FormData();
      formData.append('name', name || 'Anonymous');
      formData.append('email', email);
      formData.append('subject', subject || 'General Inquiry');
      formData.append('message', message);
      const res = await fetch(FORMSPREE_URL, { method: 'POST', body: formData, headers: { Accept: 'application/json' } });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setSubject(''); setMessage('');
        setTimeout(() => setStatus('idle'), 5000);
      } else throw new Error('Formspree error');
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    } finally { setLoading(false); }
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Contact</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Get in <span className="gradient-text">touch</span></h1>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Have questions, feedback, or partnership inquiries? We'd love to hear from you.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-5">
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7]/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-[#a855f7]" />
              </div>
              <h3 className="text-base font-semibold text-[#f1f5f9] mb-1">Email</h3>
              <p className="text-sm text-[#94a3b8]">support@freeaihumanizer.online</p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-[#06b6d4]/10 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#06b6d4]" />
              </div>
              <h3 className="text-base font-semibold text-[#f1f5f9] mb-1">Response Time</h3>
              <p className="text-sm text-[#94a3b8]">Within 24 hours for Pro users, 48 hours for free users.</p>
            </div>
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e]/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#22c55e]" />
              </div>
              <h3 className="text-base font-semibold text-[#f1f5f9] mb-1">Location</h3>
              <p className="text-sm text-[#94a3b8]">Remote-first team distributed across 12 countries.</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <div className="card p-8">
              <h2 className="font-[Space_Grotesk] text-xl font-bold text-[#f1f5f9] mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/[0.05] text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none focus:border-[#a855f7]/40 transition-colors" />
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email *" required className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/[0.05] text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none focus:border-[#a855f7]/40 transition-colors" />
                </div>
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/[0.05] text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none focus:border-[#a855f7]/40 transition-colors" />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message *" rows={5} required className="w-full px-4 py-3 rounded-xl bg-[#0a0a14] border border-white/[0.05] text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none focus:border-[#a855f7]/40 transition-colors resize-none" />
                <button type="submit" disabled={loading} className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#a855f7]/20 transition-all disabled:opacity-60">
                  <Send className="w-4 h-4" />{loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 text-sm text-[#22c55e]">
                    <CheckCircle className="w-4 h-4 shrink-0" />Thank you! We'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-4 flex items-center gap-2 px-4 py-3 rounded-xl bg-[#ef4444]/10 border border-[#ef4444]/20 text-sm text-[#ef4444]">
                    <AlertCircle className="w-4 h-4 shrink-0" />Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
