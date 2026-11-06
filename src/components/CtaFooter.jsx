import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import Logo from "./Logo.jsx";
import Reveal from "./Reveal.jsx";
import { CRM, INSTAGRAM_CLINICA, INSTAGRAM_DR, waLink } from "../config.js";

export function Cta() {
  return (
    <section className="px-5 pb-24 md:px-8">
      <Reveal>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-deep px-8 py-16 text-center text-cream md:py-24">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-brand blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-3xl leading-tight md:text-5xl">
              O primeiro passo para a sua melhor versão começa com uma conversa.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">Agende sua consulta agora mesmo, é rápido e direto pelo WhatsApp.</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream px-8 py-4 font-semibold text-cocoa transition hover:-translate-y-0.5 hover:bg-white">
              <WhatsAppIcon className="h-5 w-5 text-[#25D366]" /> Agendar minha consulta
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-cocoa/10 py-12">
      <div className="container-x flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-4 text-sm text-cocoa/60">Dr. Otávio Viano · Médico · {CRM}</p>
        </div>
        <div className="flex gap-3">
          <a href={INSTAGRAM_DR} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5"><Instagram size={16} /> @dr_otavioviano</a>
          <a href={INSTAGRAM_CLINICA} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-4 !py-2.5"><Instagram size={16} /> @vianosaude</a>
        </div>
      </div>
      <p className="container-x mt-10 text-xs leading-relaxed text-cocoa/45">
        As informações deste site têm caráter informativo e não substituem a consulta médica. Os resultados variam de pessoa para pessoa.
        © {new Date().getFullYear()} Clínica Viano Saúde.
      </p>
    </footer>
  );
}
