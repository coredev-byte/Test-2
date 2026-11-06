import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon.jsx";
import { waLink } from "../config.js";

export default function WhatsAppFloat() {
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBubble(true), 3500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-7 md:right-7">
      <AnimatePresence>
        {bubble && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            className="relative hidden max-w-[240px] rounded-2xl sm:block rounded-br-sm bg-white p-4 pr-8 text-sm text-cocoa shadow-soft"
          >
            <button
              onClick={() => setBubble(false)}
              aria-label="Fechar"
              className="absolute right-2 top-2 rounded-full p-1 text-cocoa/40 hover:text-cocoa"
            >
              <X size={14} />
            </button>
            <p className="font-semibold">Clínica Viano Saúde</p>
            <p className="mt-1 text-cocoa/70">Agende sua consulta por aqui. Respondemos no WhatsApp.</p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 2 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-6px_rgba(37,211,102,.6)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative h-8 w-8" />
      </motion.a>
    </div>
  );
}
