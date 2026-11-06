import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import Magnetic from "./Magnetic.jsx";
import { ScriptWrite, SplitWords } from "./Reveal.jsx";
import { CRM, waLink } from "../config.js";

const ease = [0.22, 1, 0.36, 1];
const D = 1.4; // espera o preloader sair

function RingText() {
  const text = "AGENDE SUA CONSULTA • CLÍNICA VIANO SAÚDE • ";
  return (
    <svg viewBox="0 0 200 200" className="animate-spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
      <defs><path id="ring" d="M100,100 m-88,0 a88,88 0 1,1 176,0 a88,88 0 1,1 -176,0" /></defs>
      <text fontSize="9.6" letterSpacing="4.1" fontWeight="600" fill="#4A382C" fontFamily="Montserrat">
        <textPath href="#ring">{text}</textPath>
      </text>
    </svg>
  );
}

export default function Hero() {
  const { scrollY } = useScroll();
  const yLogo = useTransform(scrollY, [0, 700], [0, 140]);
  const rLogo = useTransform(scrollY, [0, 700], [0, -25]);
  const yText = useTransform(scrollY, [0, 700], [0, -60]);

  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-32 md:min-h-screen md:pb-24 md:pt-40">
      <div className="container-x grid items-center gap-14 md:grid-cols-[1.25fr_.75fr]">
        <motion.div style={{ y: yText }}>
          <motion.p className="kicker" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: D, duration: 0.8, ease }}>
            Dr. Otávio Viano · {CRM}
          </motion.p>

          <h1 className="relative mt-8 font-display text-[3.4rem] leading-[0.95] text-slate-brand sm:text-7xl md:text-[6.4rem]">
            <SplitWords text="Emagrecer," className="block" delay={D + 0.1} animateNow />
            <SplitWords text="equilibrar," className="block" delay={D + 0.25} animateNow />
            <SplitWords text="fortalecer." className="block" delay={D + 0.4} animateNow />
            <ScriptWrite animateNow delay={D + 1} className="absolute -bottom-6 right-0 -rotate-6 text-[2.6rem] leading-none text-cocoa sm:text-6xl md:-bottom-8 md:right-4 md:text-7xl">
              com acompanhamento
            </ScriptWrite>
          </h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 0.8, duration: 0.8, ease }} className="mt-16 max-w-lg text-[15px] leading-relaxed text-cocoa/75">
            Emagrecimento, implantes hormonais e hipertrofia com consulta completa, exames e retornos.
            O Dr. Otávio Viano é pós-graduando em Endocrinologia e atende na Clínica Viano Saúde, em Mato Grosso.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: D + 1, duration: 0.8, ease }} className="mt-10 flex flex-wrap items-center gap-8">
            <Magnetic href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
            </Magnetic>
            <a href="#resultados" className="link-line">
              Ver antes e depois <ArrowDown size={15} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: yLogo, rotate: rLogo }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: D, duration: 1.2, ease }}
          className="relative mx-auto aspect-square w-72 md:w-full md:max-w-[400px]"
        >
          <RingText />
          <motion.img
            src="/logo-viano.png"
            alt="Logo da Clínica Viano Saúde"
            className="absolute inset-[13%] h-[74%] w-[74%] rounded-full shadow-soft"
            whileHover={{ scale: 1.04, rotate: 3 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
