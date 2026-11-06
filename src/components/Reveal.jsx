import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, y = 40, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* Revela palavra por palavra, deslizando de dentro de uma máscara. */
export function SplitWords({ text, className = "", delay = 0, stagger = 0.06, as: Tag = "span", animateNow = false }) {
  const words = text.split(" ");
  const anim = animateNow
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-60px" } };
  return (
    <Tag className={className} aria-label={text}>
      <motion.span {...anim} transition={{ staggerChildren: stagger, delayChildren: delay }} aria-hidden="true">
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
            <motion.span
              className="inline-block"
              variants={{ hidden: { y: "110%", rotate: 4 }, show: { y: 0, rotate: 0, transition: { duration: 0.9, ease } } }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

/* Texto manuscrito que "escreve" da esquerda para a direita. */
export function ScriptWrite({ children, className = "", delay = 0, animateNow = false }) {
  const anim = animateNow
    ? { initial: { clipPath: "inset(0 100% 0 0)" }, animate: { clipPath: "inset(0 0% 0 0)" } }
    : { initial: { clipPath: "inset(0 100% 0 0)" }, whileInView: { clipPath: "inset(0 0% 0 0)" }, viewport: { once: true } };
  return (
    <motion.span {...anim} transition={{ duration: 1.6, delay, ease: [0.65, 0, 0.35, 1] }} className={`inline-block font-script ${className}`}>
      {children}
    </motion.span>
  );
}
