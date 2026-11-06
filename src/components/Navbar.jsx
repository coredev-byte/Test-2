import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { waLink } from "../config.js";

const links = [
  ["Sobre", "#sobre"],
  ["Tratamentos", "#tratamentos"],
  ["Como funciona", "#como-funciona"],
  ["Dúvidas", "#faq"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "bg-cream/85 py-3 shadow-[0_8px_30px_-18px_rgba(62,44,35,.35)] backdrop-blur-md" : "py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <Logo />
        <ul className="hidden items-center gap-8 text-sm font-medium text-cocoa/75 md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="group relative transition hover:text-cocoa">
                {label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-slate-brand transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
          Agendar consulta
        </a>
        <button className="rounded-full p-2 md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-cream md:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 font-medium hover:bg-sand">
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Agendar consulta
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
