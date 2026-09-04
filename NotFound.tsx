import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 pb-16 px-4 min-h-[70vh] flex items-center justify-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-md">
        <div className="w-20 h-20 rounded-2xl bg-[#a855f7]/10 flex items-center justify-center mx-auto mb-6">
          <Search className="w-8 h-8 text-[#a855f7]" />
        </div>
        <h1 className="font-[Space_Grotesk] text-5xl font-bold text-[#f1f5f9] mb-4">404</h1>
        <p className="text-[#94a3b8] mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#a855f7] to-[#7c3aed] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#a855f7]/20 transition-all">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
