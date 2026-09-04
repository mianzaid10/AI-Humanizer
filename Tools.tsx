import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wand2, Copy, Check, AlertTriangle, Shield, Brain,
  FileText, ScanLine, Languages
} from 'lucide-react';

const GROQ_API_KEY = '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';

const modePrompts: Record<string, string> = {
  Standard: "You are an expert text humanizer. Rewrite the following AI-generated text to sound completely natural and human-written. Keep meaning, use varied sentence lengths, use contractions, replace formal words with casual ones. NEVER use 'moreover, furthermore, consequently'. Return ONLY rewritten text.",
  Aggressive: "You are an expert text humanizer. Aggressively rewrite the following AI-generated text to sound like a real person wrote it. Use very short punchy sentences, casual language, heavy contractions, and natural imperfections. Return ONLY rewritten text.",
  Academic: "You are an academic writing specialist. Rewrite the following AI-generated academic text to sound like a knowledgeable human scholar wrote it. Keep academic tone but make it feel authored, use natural transitions, preserve all technical terms. Return ONLY rewritten text.",
};

const modes = [
  { name: 'Standard', desc: 'Balanced humanization', color: '#a855f7' },
  { name: 'Aggressive', desc: 'Maximum naturalness', color: '#ef4444' },
  { name: 'Academic', desc: 'Scholarly tone', color: '#22c55e' },
];

function calculateAIScore(text: string) {
  let score = 0;
  const patterns = ['moreover','furthermore','consequently','nevertheless','notwithstanding','delve','tapestry','leverage','utilize','demonstrate','paramount','multifaceted','facilitate','optimize','enhance','pedagogical','in conclusion','it is important to note','it should be noted'];
  let pc = 0;
  const lt = text.toLowerCase();
  patterns.forEach((p) => { if (lt.includes(p)) pc++; });
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  let avg = 0;
  sentences.forEach((s) => { avg += s.trim().length; });
  avg = avg / Math.max(sentences.length, 1);
  let lv = 0;
  sentences.forEach((s) => { const len = s.trim().length; if (Math.abs(len - avg) < 10) lv++; });
  score = pc * 12 + lv * 3;
  if (text.length > 500) score += 5;
  if (text.length > 1000) score += 10;
  const hasCon = lt.includes("don't") || lt.includes("can't") || lt.includes("it's") || lt.includes("won't") || lt.includes("i'm");
  if (!hasCon) score += 15;
  return Math.min(100, Math.max(0, score));
}

function HumanizerTool() {
  const [input, setInput] = useState(
    'The implementation of artificial intelligence in modern educational frameworks presents multifaceted opportunities for enhancing pedagogical outcomes. Leveraging machine learning algorithms, institutions can optimize student engagement and facilitate personalized learning pathways.'
  );
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState('Standard');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [aiScore, setAiScore] = useState(0);
  const [showMeter, setShowMeter] = useState(false);
  const [error, setError] = useState('');

  const handleHumanize = useCallback(async () => {
    const text = input.trim();
    if (!text || text.length < 10) { setError('Please enter at least 10 characters.'); setTimeout(() => setError(''), 3000); return; }
    setLoading(true); setError(''); setOutput(''); setShowMeter(false);
    try {
      const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${GROQ_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: 'llama-3.3-70b-versatile', messages: [{ role: 'system', content: modePrompts[mode] }, { role: 'user', content: text }], temperature: 0.75, max_tokens: 1500 }),
      });
      if (!res.ok) { const err = await res.json(); throw new Error(err.error?.message || 'API error'); }
      const data = await res.json();
      const result = data.choices[0]?.message?.content;
      if (result) { setOutput(result); setAiScore(calculateAIScore(result)); setShowMeter(true); }
      else throw new Error('Empty response');
    } catch (err: any) { setError(err.message || 'Something went wrong.'); }
    finally { setLoading(false); }
  }, [input, mode]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [output]);

  const isHuman = aiScore < 50;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="glass rounded-2xl overflow-hidden glow-accent">
        <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.05] bg-[#0a0a14]/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
          </div>
          <span className="ml-auto text-xs text-[#64748b] font-medium">AI Humanizer — Editor</span>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="p-5 border-b md:border-b-0 md:border-r border-white/[0.05]">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-4 h-4 text-[#ef4444]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#ef4444]">AI Text</span>
            </div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Paste your AI-generated text here..." className="editor-area min-h-[200px]" />
          </div>
          <div className="p-5 relative">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-[#22c55e]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#22c55e]">Human Text</span>
              {output && (
                <button onClick={handleCopy} className="ml-auto flex items-center gap-1.5 text-xs text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                  {copied ? <Check className="w-3.5 h-3.5 text-[#22c55e]" /> : <Copy className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              )}
            </div>
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-2">
                    {[...Array(5)].map((_, i) => <div key={i} className="h-3 rounded bg-white/[0.03] shimmer" style={{ width: `${60 + Math.random() * 40}%`, animationDelay: `${i * 0.1}s` }} />)}
                  </motion.div>
                ) : output ? (
                  <motion.div key="output" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#94a3b8] leading-relaxed">{output}</motion.div>
                ) : (
                  <motion.span key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#64748b]">Click "Humanize" to see the result...</motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-5 py-4 border-t border-white/[0.05] bg-[#0a0a14]/30">
          <div className="flex gap-2">
            {modes.map((m) => (
              <button key={m.name} onClick={() => setMode(m.name)}
                className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${mode === m.name ? 'text-white' : 'text-[#64748b] hover:text-[#94a3b8] border border-white/[0.05]'}`}
                style={mode === m.name ? { background: `linear-gradient(135deg, ${m.color}22, ${m.color}44)`, borderColor: `${m.color}66`, boxShadow: `0 0 20px ${m.color}20` } : {}}
              >
                {m.name}
              </button>
            ))}
          </div>
          <AnimatePresence>
            {error && (
              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-xs text-[#ef4444] sm:ml-4">
                <AlertTriangle className="w-3.5 h-3.5" />{error}
              </motion.div>
            )}
          </AnimatePresence>
          <button onClick={handleHumanize} disabled={loading}
            className="sm:ml-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#a855f7]/20 transition-all duration-300 disabled:opacity-60"
          >
            <Wand2 className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Humanizing...' : 'Humanize'}
          </button>
        </div>

        <AnimatePresence>
          {showMeter && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
              <div className="px-5 pb-5">
                <div className="bg-[#0a0a14] border border-white/[0.05] rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Brain className="w-4 h-4 text-[#c084fc]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748b]">AI Detection Analysis</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-[#94a3b8] w-28 shrink-0">AI Probability</span>
                      <div className="flex-1 h-2.5 bg-white/[0.03] rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} animate={{ width: `${aiScore}%` }} transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                          className={`h-full rounded-full relative ${isHuman ? 'bg-gradient-to-r from-[#22c55e] to-[#10b981]' : 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'}`}
                        >
                          <div className="absolute inset-0 progress-shine rounded-full" />
                        </motion.div>
                      </div>
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm font-bold text-[#f1f5f9] w-12 text-right">{Math.round(aiScore)}%</motion.span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-[#94a3b8] w-28 shrink-0">Classification</span>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isHuman ? 'bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/20' : 'bg-[#ef4444]/10 text-[#ef4444] border border-[#ef4444]/20'}`}>
                        {isHuman ? '✅ Likely Human' : '⚠️ AI Generated'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const otherTools = [
  { icon: ScanLine, title: 'AI Detector', desc: 'Check if text is AI-generated before humanizing.', comingSoon: true },
  { icon: Languages, title: 'Paraphraser', desc: 'Rewrite text in different styles while keeping meaning.', comingSoon: true },
  { icon: FileText, title: 'Summarizer', desc: 'Condense long articles into key points instantly.', comingSoon: true },
];

export default function Tools() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Tools</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">AI <span className="gradient-text">Humanizer</span></h1>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Paste any AI-generated text and transform it into natural, human-sounding content that bypasses all detectors.</p>
        </motion.div>

        <HumanizerTool />

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20">
          <div className="text-center mb-10">
            <h2 className="font-[Space_Grotesk] text-2xl sm:text-3xl font-bold mb-3">More <span className="gradient-text">Free Tools</span></h2>
            <p className="text-sm text-[#94a3b8]">Coming soon to the Free AI Humanizer suite.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {otherTools.map((tool, i) => (
              <motion.div key={tool.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="card p-6 text-center relative overflow-hidden"
              >
                {tool.comingSoon && (
                  <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] border border-[#f59e0b]/20">Coming Soon</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-[#a855f7]/10 flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-5 h-5 text-[#a855f7]" />
                </div>
                <h3 className="text-base font-semibold text-[#f1f5f9] mb-2">{tool.title}</h3>
                <p className="text-sm text-[#94a3b8]">{tool.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
