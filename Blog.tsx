import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    slug: 'how-to-bypass-turnitin-ai-detection',
    title: 'How to Bypass Turnitin AI Detection in 2026',
    excerpt: 'Turnitin\'s AI detector is getting smarter. Here are proven strategies to make your AI-generated essays pass undetected while maintaining academic integrity.',
    date: 'Jan 15, 2026',
    readTime: '6 min read',
    tags: ['Turnitin', 'Academic', 'Tips'],
    color: '#a855f7',
  },
  {
    slug: 'gptzero-vs-originality-ai',
    title: 'GPTZero vs Originality.ai: Which Detector is Harder to Beat?',
    excerpt: 'We tested the same humanized text against GPTZero and Originality.ai. The results reveal which detector is truly the toughest to bypass.',
    date: 'Jan 10, 2026',
    readTime: '8 min read',
    tags: ['Detection', 'Comparison', 'Research'],
    color: '#06b6d4',
  },
  {
    slug: 'best-ai-humanizer-tools-compared',
    title: 'The 10 Best AI Humanizer Tools Compared (Free & Paid)',
    excerpt: 'We tested every major AI humanizer on the market. From bypass rates to pricing to output quality, here is the definitive comparison guide.',
    date: 'Jan 5, 2026',
    readTime: '12 min read',
    tags: ['Tools', 'Comparison', 'Guide'],
    color: '#22c55e',
  },
  {
    slug: 'why-ai-text-sounds-robotic',
    title: 'Why AI Text Sounds Robotic (And How to Fix It)',
    excerpt: 'ChatGPT and Claude produce predictable patterns. Understanding these patterns is the first step to making AI text sound authentically human.',
    date: 'Dec 28, 2025',
    readTime: '5 min read',
    tags: ['Writing', 'AI', 'Education'],
    color: '#f59e0b',
  },
  {
    slug: 'academic-writing-with-ai',
    title: 'Using AI for Academic Writing: A Complete Guide',
    excerpt: 'How to ethically use AI tools for research, outlining, and drafting while ensuring your final submission passes all plagiarism and AI detectors.',
    date: 'Dec 20, 2025',
    readTime: '10 min read',
    tags: ['Academic', 'Guide', 'Ethics'],
    color: '#ef4444',
  },
  {
    slug: 'free-vs-paid-ai-humanizers',
    title: 'Free vs Paid AI Humanizers: Is It Worth Upgrading?',
    excerpt: 'We compare free AI humanizers against premium options across speed, quality, bypass rate, and features to help you decide.',
    date: 'Dec 15, 2025',
    readTime: '7 min read',
    tags: ['Pricing', 'Comparison', 'Tips'],
    color: '#c084fc',
  },
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-xs font-semibold text-[#c084fc] uppercase tracking-[0.15em] mb-3 block">Blog</span>
          <h1 className="font-[Space_Grotesk] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Latest <span className="gradient-text">insights</span></h1>
          <p className="text-[#94a3b8] max-w-lg mx-auto">Tips, guides, and research on AI detection, humanization, and writing better content.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="spotlight card overflow-hidden group"
              onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--sx', `${e.clientX - r.left}px`); e.currentTarget.style.setProperty('--sy', `${e.clientY - r.top}px`); }}
            >
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-1 text-[10px] text-[#64748b]">
                    <Clock className="w-3 h-3" />{post.readTime}
                  </span>
                  <span className="text-[10px] text-[#64748b]">{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold text-[#f1f5f9] mb-3 group-hover:text-[#c084fc] transition-colors leading-snug">{post.title}</h2>
                <p className="text-sm text-[#94a3b8] leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.03] text-[#64748b] border border-white/[0.04]">{tag}</span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-[#a855f7] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
