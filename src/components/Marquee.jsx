const items = [
  "Emagrecimento", "Implantes hormonais", "Hipertrofia", "Endocrinologia",
  "Soroterapia & boosters", "Reposição hormonal", "Check-up metabólico", "Performance",
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-cocoa/10 bg-cocoa py-5 text-cream">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-xl italic md:text-2xl">
            {t} <span className="text-gold not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
