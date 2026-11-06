import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Reveal, { ScriptWrite } from "./Reveal.jsx";
import { waLink } from "../config.js";

const cases = [
  { id: "01", label: "Caso 01", before: "/antes-depois/caso1-antes.jpg", after: "/antes-depois/caso1-depois.jpg", alt: "paciente adulto" },
  { id: "02", label: "Caso 02", before: "/antes-depois/caso2-antes.jpg", after: "/antes-depois/caso2-depois.jpg", alt: "paciente adolescente" },
];

function Compare({ item }) {
  const box = useRef(null);
  const inView = useInView(box, { once: true, amount: 0.5 });
  const pos = useMotionValue(50);
  const [p, setP] = useState(50);
  const [touched, setTouched] = useState(false);
  useMotionValueEvent(pos, "change", setP);
  const clip = useTransform(pos, (v) => `inset(0 ${100 - v}% 0 0)`);
  const left = useTransform(pos, (v) => `${v}%`);

  // dica animada: a barra "passeia" sozinha na primeira vez que aparece
  useEffect(() => {
    if (!inView || touched) return;
    const c = animate(pos, [50, 82, 18, 50], { duration: 2.6, ease: "easeInOut", delay: 0.3 });
    return () => c.stop();
  }, [inView, item.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const setFromX = (clientX) => {
    const r = box.current.getBoundingClientRect();
    pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  };
  const down = (e) => {
    setTouched(true);
    pos.stop();
    setFromX(e.clientX);
    const mv = (ev) => setFromX(ev.clientX);
    const up = () => { window.removeEventListener("pointermove", mv); window.removeEventListener("pointerup", up); };
    window.addEventListener("pointermove", mv);
    window.addEventListener("pointerup", up);
  };
  const key = (e) => {
    if (e.key === "ArrowLeft") pos.set(Math.max(0, pos.get() - 5));
    if (e.key === "ArrowRight") pos.set(Math.min(100, pos.get() + 5));
  };

  return (
    <div ref={box} onPointerDown={down} className="relative aspect-[3/4] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[2rem] bg-sand shadow-soft">
      <img src={item.after} alt={`Depois do tratamento, ${item.alt}`} className="absolute inset-0 h-full w-full object-cover" draggable="false" />
      <motion.img style={{ clipPath: clip }} src={item.before} alt={`Antes do tratamento, ${item.alt}`} className="absolute inset-0 h-full w-full object-cover" draggable="false" />

      <span style={{ opacity: p > 12 ? 1 : 0 }} className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[.3em] text-cocoa transition-opacity">Antes</span>
      <span style={{ opacity: p < 88 ? 1 : 0 }} className="absolute right-4 top-4 rounded-full bg-slate-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[.3em] text-cream transition-opacity">Depois</span>

      <motion.div style={{ left }} className="pointer-events-none absolute inset-y-0 -translate-x-1/2">
        <div className="mx-auto h-full w-[2px] bg-cream" />
        <div
          role="slider"
          tabIndex={0}
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(p)}
          onKeyDown={key}
          className="pointer-events-auto absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cream text-cocoa shadow-soft outline-none ring-slate-brand focus-visible:ring-2"
        >
          <MoveHorizontal size={22} />
        </div>
      </motion.div>
    </div>
  );
}

export default function BeforeAfter() {
  const [idx, setIdx] = useState(0);
  const item = cases[idx];

  return (
    <section id="resultados" className="relative overflow-hidden border-y border-cocoa/10 bg-cream py-24 md:py-32">
      <div className="container-x">
        {/* título no mesmo estilo das artes do Instagram da clínica */}
        <div className="text-center">
          <Reveal y={20}><p className="text-[11px] font-semibold uppercase tracking-[.5em] text-cocoa md:text-sm">Protocolo de emagrecimento</p></Reveal>
          <h2 className="relative mx-auto mt-4 inline-block font-display text-[5.5rem] leading-[.9] text-slate-brand md:text-[11rem]">
            <span className="flex overflow-hidden">
              {"ANTES".split("").map((l, i) => (
                <motion.span key={i} className="inline-block" initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}>
                  {l}
                </motion.span>
              ))}
            </span>
            <ScriptWrite delay={0.6} className="absolute -bottom-6 left-1/2 w-max -translate-x-1/2 text-5xl text-cocoa md:-bottom-12 md:text-8xl">
              e depois
            </ScriptWrite>
          </h2>
        </div>

        <div className="mt-20 grid items-center gap-12 md:mt-28 md:grid-cols-[1fr_1fr] md:gap-20">
          <Reveal className="mx-auto w-full max-w-md">
            <AnimatePresence mode="wait">
              <motion.div key={item.id} initial={{ opacity: 0, rotateY: -12, scale: 0.96 }} animate={{ opacity: 1, rotateY: 0, scale: 1 }} exit={{ opacity: 0, rotateY: 12, scale: 0.96 }} transition={{ duration: 0.5 }} style={{ perspective: 1000 }}>
                <Compare item={item} />
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <div>
            <Reveal><p className="font-display text-3xl leading-tight text-cocoa md:text-4xl">Arraste a barra e veja a diferença.</p></Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-cocoa/75">
                Pacientes reais da Clínica Viano Saúde que seguiram o protocolo de emagrecimento com
                acompanhamento médico, ajustes de rotina e retornos periódicos.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex gap-4">
                {cases.map((c, i) => (
                  <button key={c.id} onClick={() => setIdx(i)} className="group relative text-left" aria-pressed={i === idx}>
                    <div className={`relative h-28 w-24 overflow-hidden rounded-2xl transition duration-500 ${i === idx ? "ring-2 ring-slate-brand ring-offset-4 ring-offset-cream" : "opacity-60 grayscale hover:opacity-100 hover:grayscale-0"}`}>
                      <img src={c.after} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    </div>
                    <span className="mt-3 block text-[11px] font-semibold uppercase tracking-[.25em] text-cocoa">{c.label}</span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <a href={waLink("Olá, Dr. Otávio! Vi os resultados no site e quero saber mais sobre o protocolo de emagrecimento.")} target="_blank" rel="noopener noreferrer" className="link-line mt-10">
                Quero conhecer o protocolo →
              </a>
              <p className="mt-8 max-w-md text-[11px] leading-relaxed text-cocoa/50">
                Imagens publicadas com autorização dos pacientes (e dos responsáveis, no caso de menores).
                Resultados variam de pessoa para pessoa e dependem de avaliação médica individual.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
