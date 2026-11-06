import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

function Counter({ to, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: "easeOut", onUpdate: setV });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

const stats = [
  { to: 3.4, decimals: 1, suffix: " mil", label: "seguidores acompanhando conteúdos de saúde" },
  { to: 130, suffix: "+", label: "publicações educativas no Instagram" },
  { to: 6, label: "frentes de cuidado: do emagrecimento à performance" },
  { to: 100, suffix: "%", label: "dos protocolos personalizados" },
];

export default function Stats() {
  return (
    <section className="bg-cocoa py-16 text-cream">
      <div className="container-x grid grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-serif text-4xl text-gold md:text-5xl"><Counter {...s} /></p>
            <p className="mt-2 text-sm text-cream/70">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
