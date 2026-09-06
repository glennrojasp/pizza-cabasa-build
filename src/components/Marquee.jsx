// Réplica de la franja "marquee" animada por CSS del template original.
export default function Marquee({ items, dark = true }) {
  const loop = [...items, ...items];
  return (
    <div className={`overflow-hidden py-5 ${dark ? "bg-heading" : "bg-lighter"}`}>
      <div className="marquee-track flex w-max items-center gap-12 whitespace-nowrap">
        {loop.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-12 font-heading text-xl uppercase tracking-wide md:text-2xl ${
              dark ? "text-white" : "text-heading"
            }`}
          >
            {item}
            <i className="flaticon-star text-base text-primary" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
