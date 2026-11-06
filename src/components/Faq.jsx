import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal.jsx";

const faqs = [
  ["Como agendo uma consulta?", "Pelo botão do WhatsApp nesta página. Nossa equipe responde com os horários disponíveis e as orientações para o dia da consulta."],
  ["Preciso levar exames?", "Se tiver exames recentes, leve. Caso contrário, os exames necessários são solicitados na primeira consulta."],
  ["O implante hormonal é indicado para todos?", "Não. A indicação depende de avaliação clínica e laboratorial individual. Em alguns casos outras abordagens são mais adequadas."],
  ["O tratamento de emagrecimento usa medicação?", "Depende do seu caso. O plano pode envolver ajustes de alimentação, atividade física, suplementação e, quando indicado, medicação, sempre com acompanhamento."],
  ["Onde fica a clínica?", "A Clínica Viano Saúde fica em Mato Grosso. Chame no WhatsApp para receber o endereço e a localização."],
];

function Item({ q, a, open, onClick }) {
  return (
    <div className="border-b border-cocoa/10">
      <button onClick={onClick} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={open}>
        <span className="text-lg font-medium">{q}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sand">
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="pb-6 pr-12 leading-relaxed text-cocoa/70">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-x grid gap-12 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <Reveal><span className="eyebrow">Dúvidas frequentes</span></Reveal>
          <Reveal delay={0.1}><h2 className="h-section mt-5">Ficou alguma dúvida?</h2></Reveal>
          <Reveal delay={0.2}><p className="mt-5 text-cocoa/70">Separamos as perguntas mais comuns. Se a sua não estiver aqui, fale com a gente.</p></Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="border-t border-cocoa/10">
            {faqs.map(([q, a], i) => (
              <Item key={q} q={q} a={a} open={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
