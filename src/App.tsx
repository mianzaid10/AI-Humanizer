import AuroraBackground from './components/AuroraBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import DemoEditor from './components/DemoEditor';
import HowItWorks from './components/HowItWorks';
import CompareSection from './components/CompareSection';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Feedback from './components/Feedback';
import CTA from './components/CTA';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05050A]">
      <AuroraBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ContentSection />
        <DemoEditor />
        <HowItWorks />
        <CompareSection />
        <Features />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Feedback />
        <CTA />
        <Marquee />
      </main>
      <Footer />
    </div>
  );
}
