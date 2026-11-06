import { MotionConfig, motion, useScroll, useSpring } from "framer-motion";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BeforeAfter from "./components/BeforeAfter.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Faq from "./components/Faq.jsx";
import { Cta, Footer } from "./components/CtaFooter.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <MotionConfig reducedMotion="user">
      <Preloader />
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-slate-brand" />
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <About />
        <Services />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </MotionConfig>
  );
}
