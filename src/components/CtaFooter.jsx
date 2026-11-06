import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import Magnetic from "./Magnetic.jsx";
import { ScriptWrite, SplitWords } from "./Reveal.jsx";
import { CRM, INSTAGRAM_CLINICA, INSTAGRAM_DR, waLink } from "../config.js";

export function Cta() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);
  return (
    <section ref={ref} className="relative overflow-hidden bg-slate-deep py-28 text-cream md:py-40">
      <motion.p style={{ x }} aria-hidden="true" className="pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap font-display text-[14rem] leading-none text-cream/[.04] md:text-[22rem]">
        Viano Saúde Viano Saúde
      </motion.p>
      <div className="container-x relative text-center">
        <h2 className="relative mx-auto inline-block font-display text-5xl leading-none md:text-8xl">
          <SplitWords text="Vamos conversar?" />
          <ScriptWrite delay={0.5} className="absolute -bottom-10 right-0 -rotate-6 text-4xl text-slate-soft md:-bottom-14 md:text-6xl">
            sem compromisso
          </ScriptWrite>
        </h2>
        <p className="mx-auto mt-16 max-w-md text-[15px] text-cream/70">Mande uma mensagem e a equipe da clínica te responde com os horários disponíveis.</p>
        <Magnetic href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-10 !bg-cream !text-cocoa hover:!text-cream">
          <WhatsAppIcon className="h-5 w-5" /> Agendar minha consulta
        </Magnetic>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-14">
      <div className="container-x flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <img src="/logo-viano.png" alt="Clínica Viano Saúde" className="h-20 w-20 rounded-full" />
          <div className="text-sm text-cocoa/70">
            <p className="font-semibold text-cocoa">Dr. Otávio Viano</p>
            <p>Médico · {CRM}</p>
            <p>Responsável técnico, Clínica Viano Saúde</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm md:items-end">
          <a href={INSTAGRAM_DR} target="_blank" rel="noopener noreferrer" className="link-line !pb-0.5 after:!scale-x-0 hover:after:!scale-x-100">@dr_otavioviano</a>
          <a href={INSTAGRAM_CLINICA} target="_blank" rel="noopener noreferrer" className="link-line !pb-0.5 after:!scale-x-0 hover:after:!scale-x-100">@vianosaude</a>
        </div>
      </div>
      <p className="container-x mt-12 text-[11px] leading-relaxed text-cocoa/45">
        Conteúdo informativo, não substitui a consulta médica. Resultados variam de pessoa para pessoa. © {new Date().getFullYear()} Clínica Viano Saúde.
      </p>
    </footer>
  );
}
