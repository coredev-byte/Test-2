export function LeafMark({ className = "h-9 w-9" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="24" cy="14" r="7" fill="#3E2C23" />
      <path d="M12 54c0-16 9-27 25-29-2 16-11 27-25 29z" fill="#3E2C23" />
      <path d="M30 54c2-16 11-25 25-27-2 15-11 25-25 27z" fill="#5F7F98" />
      <path d="M40 22c3-8 9-12 16-13-2 7-7 12-16 13z" fill="#8FA9BD" />
    </svg>
  );
}

export default function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-2.5">
      <LeafMark />
      <span className="leading-none">
        <span className="block font-serif text-lg font-semibold text-cocoa">Viano Saúde</span>
        <span className="block text-[10px] font-medium uppercase tracking-[.22em] text-slate-brand">
          Dr. Otávio Viano
        </span>
      </span>
    </a>
  );
}
