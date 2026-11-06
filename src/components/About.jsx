import { motion } from "framer-motion";
import { GraduationCap, Building2, Stethoscope } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { CRM, INSTAGRAM_DR } from "../config.js";

const facts = [
  { icon: Stethoscope, title: "Médico", text: `Registro ativo ${CRM}` },
  { icon: GraduationCap, title: "Endocrinologia", text: "Pós-graduação em andamento" },
  { icon: Building2, title: "Viano Saúde", text: "Clínica própria com estrutura completa" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="container-x grid items-center gap-16 md:grid-cols-2">
        <Reveal className="relative mx-auto">
          <div className="relative grid h-72 w-72 place-items-center md:h-96 md:w-96">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-gold/40"
            />
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-slate-soft/50 to-sand" />
            <img
              src="/dr-otavio.png"
              alt="Dr. Otávio Viano, médico"
              className="relative h-56 w-56 rounded-full object-cover shadow-soft md:h-72 md:w-72"
            />
          </div>
        </Reveal>

        <div>
          <Reveal><span className="eyebrow">Sobre o médico</span></Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-section mt-5">Cuidado próximo, decisões baseadas em evidência.</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-cocoa/70">
              Sou o Dr. Otávio Viano, médico e pós-graduando em Endocrinologia. Meu trabalho é entender
              sua história, seus exames e seus objetivos para construir um plano realista, seja para
              emagrecer com saúde, equilibrar seus hormônios ou ganhar massa muscular com segurança.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={0.25 + i * 0.1}>
                <div className="h-full rounded-2xl border border-cocoa/10 bg-white/70 p-5 transition hover:-translate-y-1 hover:shadow-soft">
                  <Icon className="text-slate-brand" size={22} />
                  <p className="mt-3 font-semibold">{title}</p>
                  <p className="mt-1 text-sm text-cocoa/60">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.5}>
            <a href={INSTAGRAM_DR} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block text-sm font-semibold text-slate-brand underline-offset-4 hover:underline">
              Acompanhe no Instagram @dr_otavioviano →
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
