import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Wand2, AlertTriangle, Shield, Brain } from 'lucide-react';

const GROQ_API_KEY = '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';

const modePrompts: Record<string, string> = {
  Standard:
    "You are an expert text humanizer. Rewrite the following AI-generated text to sound completely natural and human-written. Rules: Keep meaning, use varied sentence lengths, use contractions (don't, can't, it's), replace formal words with casual ones, NEVER use 'moreover, furthermore, consequently', return ONLY rewritten text.",
  Aggressive:
    "You are an expert text humanizer. Aggressively rewrite the following AI-generated text to sound like a real person wrote it. Use very short punchy sentences, casual language, heavy contractions, and natural imperfections. Return ONLY rewritten text.",
  Academic:
    "You are an academic writing specialist. Rewrite the following AI-generated academic text to sound like a knowledgeable human scholar wrote it. Keep academic tone but make it feel authored, use natural transitions, preserve all technical terms. Return ONLY rewritten text.",
};

const modes = [
  { name: 'Standard', desc: 'Balanced humanization', color: '#7C5CFC' },
  { name: 'Aggressive', desc: 'Maximum naturalness', color: '#F87171' },
  { name: 'Academic', desc: 'Scholarly tone', color: '#34D399' },
];

function calculateAIScore(text: string) {
  let aiScore = 0;
  const aiPatterns = [
    'moreover', 'furthermore', 'consequently', 'nevertheless', 'notwithstanding',
    'delve', 'tapestry', 'leverage', 'utilize', 'demonstrate', 'paramount',
    'multifaceted', 'facilitate', 'optimize', 'enhance', 'pedagogical',
    'in conclusion', 'it is important to note', 'it should be noted',
  ];
  let patternCount = 0;
  const lowerText = text.toLowerCase();
  aiPatterns.forEach((p) => { if (lowerText.includes(p)) patternCount++; });
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  let avgLength = 0;
  sentences.forEach((s) => { avgLength += s.trim().length; });
  avgLength = avgLength / Math.max(sentences.length, 1);
  let lengthVariation = 0;
  sentences.forEach((s) => {
    const len = s.trim().length;
    if (Math.abs(len - avgLength) < 10) lengthVariation++;
  });
  aiScore = patternCount * 12 + lengthVariation * 3;
  if (text.length > 500) aiScore += 5;
  if (text.length > 1000) aiScore += 10;
  const hasContractions = lowerText.includes("don't") || lowerText.includes("can't") || lowerText.includes("it's") || lowerText.includes("won't") || lowerText.includes("i'm");
  if (!hasContractions) aiScore += 15;
  return Math.min(100, Math.max(0, aiScore));
}

export default function DemoEditor() {
  const [inputText, setInputText] = useState(
    'The implementation of artificial intelligence in modern educational frameworks presents multifaceted opportunities for enhancing pedagogical outcomes. Leveraging machine learning algorithms, institutions can optimize student engagement and facilitate personalized learning pathways.'
  );
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState('Standard');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [aiScore, setAiScore] = useState(0);
  const [showMeter, setShowMeter] = useState(false);
  const [error, setError] = useState('');

  const handleHumanize = useCallback(async () => {
    const text = inputText.trim();
    if (!text || text.length < 10) {
      setError('Please enter at least 10 characters of text.');
      setTimeout(() => setError(''), 3000);
      return;
    }
    setLoading(true);
    setError('');
    setOutputText('');
    setShowMeter(false);

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            { role: 'system', content: modePrompts[mode] },
            { role: 'user', content: text },
          ],
          temperature: 0.75,
          max_tokens: 1500,
        }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || 'API error');
      }

      const data = await response.json();
      const result = data.choices[0]?.message?.content;
      if (result) {
        setOutputText(result);
        const score = calculateAIScore(result);
        setAiScore(score);
        setShowMeter(true);
      } else {
        throw new Error('Empty response');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [inputText, mode]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [outputText]);

  const humanProbability = aiScore;
  const isHuman = humanProbability < 50;

  return (
    <section id="demo" className="relative z-10 px-4 sm:px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold text-[#A78BFA] uppercase tracking-[0.15em] mb-3">
            Live Demo
          </span>
          <h2 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Try it <span className="gradient-text">yourself</span>
          </h2>
          <p className="text-[#9B97B8] max-w-md mx-auto">
            Paste your AI text on the left and click Humanize — watch it transform in real-time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="glass rounded-2xl overflow-hidden glow-accent"
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-3 border-b border-white/[0.06] bg-[#0A0A14]/50">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
            </div>
            <span className="ml-auto text-xs text-[#65617E] font-medium">
              Free AI Humanizer — Editor
            </span>
          </div>

          {/* Editor body */}
          <div className="grid md:grid-cols-2">
            {/* Input */}
            <div className="p-5 border-b md:border-b-0 md:border-r border-white/[0.06]">
              <div className="flex items-center gap-2 mb-3">
                <Brain className="w-4 h-4 text-[#F87171]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F87171]">
                  AI Text
                </span>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your AI-generated text here..."
                className="w-full min-h-[180px] bg-transparent text-sm text-[#9B97B8] placeholder-[#65617E] resize-none outline-none leading-relaxed"
              />
            </div>

            {/* Output */}
            <div className="p-5 relative">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="w-4 h-4 text-[#34D399]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-[#34D399]">
                  Human Text
                </span>
                {outputText && (
                  <button
                    onClick={handleCopy}
                    className="ml-auto flex items-center gap-1.5 text-xs text-[#65617E] hover:text-[#F0EEF9] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#34D399]" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                )}
              </div>
              <div className="min-h-[180px]">
                <AnimatePresence mode="wait">
                  {loading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-2"
                    >
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="h-3 rounded bg-white/[0.04] shimmer"
                          style={{ width: `${60 + Math.random() * 40}%`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </motion.div>
                  ) : outputText ? (
                    <motion.div
                      key="output"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-[#9B97B8] leading-relaxed"
                    >
                      {outputText}
                    </motion.div>
                  ) : (
                    <motion.span
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm text-[#65617E]"
                    >
                      Click "Humanize" to see the result...
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Footer controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 px-5 py-4 border-t border-white/[0.06] bg-[#0A0A14]/30">
            <div className="flex gap-2">
              {modes.map((m) => (
                <button
                  key={m.name}
                  onClick={() => setMode(m.name)}
                  className={`relative px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                    mode === m.name
                      ? 'text-white mode-btn-active'
                      : 'text-[#65617E] hover:text-[#9B97B8] border border-white/[0.06]'
                  }`}
                  style={
                    mode === m.name
                      ? { background: `linear-gradient(135deg, ${m.color}22, ${m.color}44)`, borderColor: `${m.color}66` }
                      : {}
                  }
                >
                  {m.name}
                </button>
              ))}
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 text-xs text-[#F87171] sm:ml-4"
                >
                  <AlertTriangle className="w-3.5 h-3.5" />
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={handleHumanize}
              disabled={loading}
              className="sm:ml-auto group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#A78BFA] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#7C5CFC]/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              <Wand2 className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Humanizing...' : 'Humanize'}
            </button>
          </div>

          {/* Detection meter */}
          <AnimatePresence>
            {showMeter && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <div className="bg-[#0A0A14] border border-white/[0.06] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Brain className="w-4 h-4 text-[#A78BFA]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#65617E]">
                        AI Detection Analysis
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold text-[#9B97B8] w-28 shrink-0">
                          AI Probability
                        </span>
                        <div className="flex-1 h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${humanProbability}%` }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                            className={`h-full rounded-full relative ${
                              isHuman
                                ? 'bg-gradient-to-r from-[#34D399] to-[#10B981]'
                                : 'bg-gradient-to-r from-[#F87171] to-[#EF4444]'
                            }`}
                          >
                            <div className="absolute inset-0 progress-shimmer rounded-full" />
                          </motion.div>
                        </div>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="text-sm font-bold text-[#F0EEF9] w-12 text-right"
                        >
                          {Math.round(humanProbability)}%
                        </motion.span>
                      </div>

                      <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold text-[#9B97B8] w-28 shrink-0">
                          Classification
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            isHuman
                              ? 'bg-[#34D399]/10 text-[#34D399] border border-[#34D399]/20'
                              : 'bg-[#F87171]/10 text-[#F87171] border border-[#F87171]/20'
                          }`}
                        >
                          {isHuman ? '✅ Likely Human' : '⚠️ AI Generated'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
