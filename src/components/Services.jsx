import { motion } from "framer-motion";
import { Scale, FlaskConical, Dumbbell, Droplets, Activity, ClipboardList, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { waLink } from "../config.js";

const services = [
  { icon: Scale, title: "Emagrecimento", text: "Plano clínico para perda de peso sustentável, com avaliação metabólica, ajuste de hábitos e acompanhamento contínuo." },
  { icon: FlaskConical, title: "Implantes hormonais", text: "Avaliação criteriosa e indicação individualizada de implantes, com exames e monitoramento durante todo o tratamento." },
  { icon: Dumbbell, title: "Hipertrofia", text: "Estratégias médicas para ganho de massa magra e performance, integradas ao seu treino e à sua rotina." },
  { icon: Droplets, title: "Soroterapia & boosters", text: "Protocolos de suporte ao metabolismo e à disposição, sempre com indicação médica." },
  { icon: Activity, title: "Saúde hormonal", text: "Investigação de cansaço, ganho de peso, libido e alterações hormonais com olhar endocrinológico." },
  { icon: ClipboardList, title: "Check-up completo", text: "Solicitação e interpretação de exames para conhecer seu ponto de partida com precisão." },
];

export default function Services() {
  return (
    <section id="tratamentos" className="relative bg-sand/60 py-24 md:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><span className="eyebrow">Tratamentos</span></Reveal>
          <Reveal delay={0.1}><h2 className="h-section mt-5">Como a Clínica Viano Saúde pode te ajudar?</h2></Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-cocoa/70">Cada protocolo começa com uma consulta detalhada. Nada de receita pronta: o plano é feito para você.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 0.1}>
              <motion.a
                href={waLink(`Olá, Dr. Otávio! Vim pelo site e tenho interesse em: ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-cream p-7 shadow-[0_1px_0_rgba(62,44,35,.08)] transition-shadow hover:shadow-soft"
              >
                <span className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-slate-soft/0 transition-all duration-500 group-hover:bg-slate-soft/25" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-cocoa text-cream transition group-hover:bg-slate-brand">
                  <Icon size={22} />
                </span>
                <h3 className="relative mt-6 font-serif text-2xl">{title}</h3>
                <p className="relative mt-3 flex-1 text-sm leading-relaxed text-cocoa/70">{text}</p>
                <span className="relative mt-6 inline-flex items-center gap-1 text-sm font-semibold text-slate-brand">
                  Quero saber mais <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
