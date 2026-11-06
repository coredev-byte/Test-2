import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Reveal, { SplitWords } from "./Reveal.jsx";

const steps = [
  ["Você chama no WhatsApp", "A equipe responde com os horários livres e o que levar no dia."],
  ["Primeira consulta", "Histórico, exame físico, medidas e conversa sobre o que você quer mudar."],
  ["Exames e plano", "Com os resultados em mãos, o protocolo é montado para o seu caso."],
  ["Retornos", "Acompanhamento da evolução e ajustes sempre que o corpo pedir."],
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section id="como-funciona" className="py-24 md:py-36">
      <div className="container-x grid gap-14 md:grid-cols-[.9fr_1.1fr] md:gap-24">
        <div className="md:sticky md:top-32 md:self-start">
          <Reveal><p className="kicker">Como funciona</p></Reveal>
          <h2 className="h-section mt-6"><SplitWords text="Quatro passos até o seu plano." /></h2>
        </div>

        <ol ref={ref} className="relative pl-16">
          <span className="absolute bottom-6 left-[22px] top-6 w-px bg-cocoa/15" />
          <motion.span style={{ scaleY: fill }} className="absolute bottom-6 left-[22px] top-6 w-px origin-top bg-slate-brand" />
          {steps.map(([t, d], i) => (
            <li key={t} className="relative pb-16 last:pb-0">
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-35% 0px" }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="absolute -left-16 top-0 grid h-11 w-11 place-items-center rounded-full bg-slate-brand font-display text-lg text-cream"
              >
                {i + 1}
              </motion.span>
              <Reveal y={24}>
                <h3 className="font-display text-2xl text-cocoa md:text-3xl">{t}</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-cocoa/70">{d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
