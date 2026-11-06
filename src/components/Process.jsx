import { motion } from "framer-motion";
import Reveal from "./Reveal.jsx";

const steps = [
  ["01", "Agendamento", "Você chama no WhatsApp e escolhe o melhor horário."],
  ["02", "Consulta completa", "Anamnese detalhada, avaliação física e definição de objetivos."],
  ["03", "Exames e plano", "Interpretação de exames e protocolo feito sob medida para você."],
  ["04", "Acompanhamento", "Retornos e ajustes para manter a evolução com segurança."],
];

export default function Process() {
  return (
    <section id="como-funciona" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Como funciona</span></Reveal>
          <Reveal delay={0.1}><h2 className="h-section mt-5">Do primeiro contato ao resultado, em 4 passos.</h2></Reveal>
        </div>
        <div className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-7 hidden h-px origin-left bg-gradient-to-r from-cocoa via-slate-brand to-gold md:block"
          />
          {steps.map(([n, title, text], i) => (
            <Reveal key={n} delay={0.2 + i * 0.15}>
              <div className="relative">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-cocoa/15 bg-cream font-serif text-xl text-slate-brand shadow-soft">
                  {n}
                </span>
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cocoa/70">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
