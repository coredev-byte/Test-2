import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import About from "./components/About.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import Process from "./components/Process.jsx";
import Faq from "./components/Faq.jsx";
import { Cta, Footer } from "./components/CtaFooter.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat.jsx";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-slate-brand to-gold" />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Services />
        <Process />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
