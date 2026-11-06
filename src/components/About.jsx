import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal, { SplitWords } from "./Reveal.jsx";
import { CRM, INSTAGRAM_DR } from "../config.js";

const facts = [
  ["Registro", `Médico · ${CRM}`],
  ["Formação", "Pós-graduação em Endocrinologia (em andamento)"],
  ["Atuação", "Emagrecimento, implantes hormonais e hipertrofia"],
  ["Clínica", "Viano Saúde, Mato Grosso"],
];

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [-6, 4]);

  return (
    <section id="sobre" ref={ref} className="py-24 md:py-36">
      <div className="container-x grid items-center gap-16 md:grid-cols-[.8fr_1.2fr] md:gap-24">
        <div className="relative mx-auto w-56 md:w-full md:max-w-[270px]">
          <motion.div style={{ rotate: rot }} className="absolute -inset-4 rounded-t-full border border-cocoa/25" />
          <motion.div style={{ y: yImg }} className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-sand">
            <motion.img
              src="/dr-otavio-retrato.jpg"
              alt="Dr. Otávio Viano"
              className="h-full w-full object-cover object-top"
              initial={{ scale: 1.25, filter: "grayscale(1)" }}
              whileInView={{ scale: 1, filter: "grayscale(0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
          <p className="absolute -bottom-10 -right-6 rotate-[-8deg] font-script text-5xl text-cocoa">Dr. Otávio</p>
        </div>

        <div>
          <Reveal><p className="kicker">O médico</p></Reveal>
          <h2 className="h-section mt-6">
            <SplitWords text="Consulta sem pressa, plano sem fórmula pronta." />
          </h2>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-cocoa/75">
              Antes de qualquer protocolo, o Dr. Otávio Viano levanta seu histórico, avalia exames e entende sua rotina.
              Só então define o caminho, seja para perder peso, ajustar hormônios ou ganhar massa muscular, e acompanha
              cada etapa de perto nos retornos.
            </p>
          </Reveal>

          <dl className="mt-12 border-t border-cocoa/15">
            {facts.map(([k, v], i) => (
              <Reveal key={k} delay={0.1 + i * 0.08} y={16}>
                <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-cocoa/15 py-4 text-sm">
                  <dt className="text-[11px] font-semibold uppercase tracking-[.25em] text-slate-brand">{k}</dt>
                  <dd className="text-cocoa">{v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.4}>
            <a href={INSTAGRAM_DR} target="_blank" rel="noopener noreferrer" className="link-line mt-8">
              @dr_otavioviano no Instagram →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
