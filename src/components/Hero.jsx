import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BadgeCheck, HeartPulse, ShieldCheck, Sparkles } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { LeafMark } from "./Logo.jsx";
import { CRM, waLink } from "../config.js";

const ease = [0.22, 1, 0.36, 1];
const fadeUp = (d) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: d, ease },
});

export default function Hero() {
  const { scrollY } = useScroll();
  const yBlob = useTransform(scrollY, [0, 600], [0, 120]);
  const yCard = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      {/* fundo animado */}
      <motion.div style={{ y: yBlob }} className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ scale: [1, 1.12, 1], x: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-slate-soft/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.18, 1], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-40 top-40 h-[440px] w-[440px] rounded-full bg-gold/20 blur-3xl"
        />
      </motion.div>

      <div className="container-x grid items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.span {...fadeUp(0.05)} className="eyebrow">
            <BadgeCheck size={14} /> Médico · {CRM}
          </motion.span>
          <motion.h1 {...fadeUp(0.15)} className="mt-6 font-serif text-[2.6rem] leading-[1.05] md:text-7xl">
            Seu corpo em <em className="text-slate-brand">equilíbrio</em>, com ciência e cuidado.
          </motion.h1>
          <motion.p {...fadeUp(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-cocoa/70">
            Emagrecimento, implantes hormonais e hipertrofia com acompanhamento médico individualizado.
            Pós-graduando em Endocrinologia, o Dr. Otávio Viano une avaliação completa e protocolos
            personalizados na <strong className="font-semibold text-cocoa">Clínica Viano Saúde</strong>.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              <WhatsAppIcon className="h-5 w-5" /> Agendar pelo WhatsApp
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#tratamentos" className="btn-ghost">Conhecer tratamentos</a>
          </motion.div>
          <motion.ul {...fadeUp(0.6)} className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-cocoa/70">
            <li className="flex items-center gap-2"><ShieldCheck size={16} className="text-slate-brand" /> Protocolos individualizados</li>
            <li className="flex items-center gap-2"><HeartPulse size={16} className="text-slate-brand" /> Exames e acompanhamento</li>
          </motion.ul>
        </div>

        {/* composição visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.25, ease }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-sand via-white to-slate-soft/40 shadow-soft">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-dashed border-slate-brand/30"
            />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <LeafMark className="mx-auto h-28 w-28" />
                <p className="mt-4 font-serif text-3xl">Viano Saúde</p>
                <p className="mt-1 text-xs uppercase tracking-[.25em] text-slate-brand">Clínica médica</p>
              </div>
            </div>
          </div>

          <motion.div style={{ y: yCard }} className="absolute -left-4 bottom-10 sm:-left-8">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-3 rounded-2xl bg-white/90 p-3 pr-5 shadow-soft backdrop-blur"
            >
              <img src="/dr-otavio.png" alt="Dr. Otávio Viano" className="h-14 w-14 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold">Dr. Otávio Viano</p>
                <p className="text-xs text-cocoa/60">Pós em Endocrinologia</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -right-2 top-10 flex sm:-right-5 items-center gap-2 rounded-2xl bg-cocoa px-4 py-3 text-cream shadow-soft"
          >
            <Sparkles size={16} className="text-gold" />
            <span className="text-sm font-medium">Atendimento individualizado</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
