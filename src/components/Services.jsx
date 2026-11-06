import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal, { SplitWords } from "./Reveal.jsx";
import { waLink } from "../config.js";

const services = [
  ["Emagrecimento", "Avaliação metabólica, plano alimentar e de atividade, medicação quando indicada e retornos para ajustar a rota."],
  ["Implantes hormonais", "Indicação individual, baseada em exames, com monitoramento durante todo o tratamento."],
  ["Hipertrofia", "Estratégia médica para ganho de massa magra, alinhada ao seu treino e à sua rotina."],
  ["Saúde hormonal", "Investigação de cansaço, ganho de peso, baixa libido e outras alterações hormonais."],
  ["Soroterapia e boosters", "Protocolos de suporte ao metabolismo e à disposição, sempre com indicação médica."],
  ["Check-up", "Pedido e leitura de exames para saber exatamente de onde você está partindo."],
];

export default function Services() {
  return (
    <section id="tratamentos" className="bg-cocoa-dark py-24 text-cream md:py-36">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal><p className="kicker !text-cream/70 before:!bg-cream/40">Tratamentos</p></Reveal>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream md:text-6xl">
              <SplitWords text="Como a clínica pode" className="block" />
              <SplitWords text="te ajudar?" className="block italic text-slate-soft" delay={0.15} />
            </h2>
          </div>
          <Reveal delay={0.2}><p className="max-w-xs text-sm text-cream/60">Toque em um tratamento para falar direto com a equipe pelo WhatsApp.</p></Reveal>
        </div>

        <ul className="mt-16 border-t border-cream/15">
          {services.map(([title, text], i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="border-b border-cream/15"
            >
              <a
                href={waLink(`Olá, Dr. Otávio! Vim pelo site e tenho interesse em: ${title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 overflow-hidden py-7 md:grid-cols-[80px_1fr_1fr_auto] md:gap-8 md:py-9"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-slate-brand transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-y-100" />
                <span className="relative font-display text-lg text-cream/50 transition group-hover:text-cream md:pl-4">{String(i + 1).padStart(2, "0")}</span>
                <span className="relative font-display text-2xl transition-transform duration-500 group-hover:translate-x-3 md:text-4xl">{title}</span>
                <span className="relative col-span-3 col-start-1 row-start-2 text-sm leading-relaxed text-cream/60 transition group-hover:text-cream md:col-span-1 md:col-start-3 md:row-start-1">{text}</span>
                <span className="relative grid h-11 w-11 place-items-center rounded-full border border-cream/25 transition duration-500 group-hover:rotate-45 group-hover:border-cream group-hover:bg-cream group-hover:text-slate-brand md:mr-4">
                  <ArrowUpRight size={18} />
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
