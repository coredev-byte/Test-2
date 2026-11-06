export default function Logo({ light = false }) {
  return (
    <a href="#inicio" className="flex items-center gap-3" aria-label="Clínica Viano Saúde, início">
      <img src="/logo-simbolo.png" alt="" className="h-10 w-auto" />
      <span className="text-[11px] font-bold uppercase leading-[1.15] tracking-[.14em]">
        <span className={`block ${light ? "text-cream" : "text-cocoa"}`}>Clínica</span>
        <span className="block text-[15px] tracking-[.12em] text-slate-brand">Viano</span>
        <span className={`block ${light ? "text-cream" : "text-cocoa"}`}>Saúde</span>
      </span>
    </a>
  );
}
