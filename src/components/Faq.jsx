import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal, { SplitWords } from "./Reveal.jsx";

const faqs = [
  ["Como agendo uma consulta?", "Pelo botão do WhatsApp. A equipe responde com os horários disponíveis e as orientações para o dia."],
  ["Preciso levar exames?", "Se tiver exames recentes, leve. Se não tiver, os necessários são pedidos na primeira consulta."],
  ["O implante hormonal serve para todo mundo?", "Não. A indicação depende de avaliação clínica e laboratorial. Em alguns casos outra abordagem funciona melhor."],
  ["O tratamento para emagrecer usa remédio?", "Depende do caso. Pode envolver alimentação, atividade física, suplementação e, quando indicado, medicação, sempre com acompanhamento."],
  ["Onde fica a clínica?", "Em Mato Grosso. Chame no WhatsApp para receber o endereço e a localização."],
];

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-cocoa/10 py-24 md:py-36">
      <div className="container-x grid gap-12 md:grid-cols-[.8fr_1.2fr] md:gap-24">
        <div>
          <Reveal><p className="kicker">Dúvidas</p></Reveal>
          <h2 className="h-section mt-6"><SplitWords text="Perguntas que sempre chegam." /></h2>
        </div>
        <div>
          {faqs.map(([q, a], i) => {
            const isOpen = open === i;
            return (
              <Reveal key={q} delay={i * 0.06} y={20}>
                <div className="border-b border-cocoa/15">
                  <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} className="group flex w-full items-center justify-between gap-6 py-6 text-left">
                    <span className={`font-display text-xl transition-colors md:text-2xl ${isOpen ? "text-slate-brand" : "text-cocoa group-hover:text-slate-brand"}`}>{q}</span>
                    <span className="relative h-4 w-4 shrink-0">
                      <span className="absolute left-0 top-1/2 h-px w-4 bg-cocoa" />
                      <motion.span animate={{ rotate: isOpen ? 0 : 90 }} className="absolute left-0 top-1/2 h-px w-4 bg-cocoa" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                        <p className="max-w-xl pb-6 text-[15px] leading-relaxed text-cocoa/70">{a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
