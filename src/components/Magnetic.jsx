import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Botão que é levemente "atraído" pelo cursor. */
export default function Magnetic({ children, className = "", strength = 0.3, ...props }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const leave = () => { x.set(0); y.set(0); };
  return (
    <motion.a ref={ref} style={{ x, y }} onMouseMove={move} onMouseLeave={leave} className={`group ${className}`} {...props}>
      <span className="absolute inset-0 -z-0 origin-bottom scale-y-0 rounded-full bg-slate-brand transition-transform duration-500 ease-out group-hover:scale-y-100" />
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
    </motion.a>
  );
}
