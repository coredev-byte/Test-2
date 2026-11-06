import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Logo from "./Logo.jsx";
import { waLink } from "../config.js";

const links = [
  ["Resultados", "#resultados"],
  ["O médico", "#sobre"],
  ["Tratamentos", "#tratamentos"],
  ["Dúvidas", "#faq"],
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // esconde ao rolar para baixo, mostra ao rolar para cima
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 400 && !open);
    setScrolled(y > 24);
  });

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-[background,padding] duration-300 ${scrolled ? "bg-paper/90 py-3 shadow-[0_1px_0_rgba(74,56,44,.08)] backdrop-blur" : "py-6"}`}
      >
        <nav className="container-x flex items-center justify-between">
          <Logo />
          <ul className="hidden items-center gap-9 text-[13px] font-medium text-cocoa md:flex">
            {links.map(([label, href]) => (
              <li key={href}><a href={href} className="link-line !pb-0.5 !font-medium after:!scale-x-0 hover:after:!scale-x-100">{label}</a></li>
            ))}
          </ul>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hidden rounded-full border border-cocoa px-5 py-2.5 text-[13px] font-semibold text-cocoa transition hover:bg-cocoa hover:text-cream md:inline-block">
            Agendar consulta
          </a>
          <button className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Fechar menu" : "Abrir menu"}>
            <motion.span animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-cocoa" />
            <motion.span animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }} className="block h-px w-6 bg-cocoa" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "circle(0% at 92% 4%)" }}
            animate={{ clipPath: "circle(150% at 92% 4%)" }}
            exit={{ clipPath: "circle(0% at 92% 4%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="paper fixed inset-0 z-30 flex flex-col justify-center px-8 md:hidden"
          >
            <ul className="space-y-3">
              {links.map(([label, href], i) => (
                <motion.li key={href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.07 }}>
                  <a href={href} onClick={() => setOpen(false)} className="font-display text-5xl text-slate-brand">{label}</a>
                </motion.li>
              ))}
            </ul>
            <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-12 self-start">
              Agendar pelo WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
