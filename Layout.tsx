import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuroraBackground from './AuroraBackground';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-[#050508]">
      <AuroraBackground />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative z-10"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
}
