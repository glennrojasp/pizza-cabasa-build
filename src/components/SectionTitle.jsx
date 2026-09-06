export default function SectionTitle({ eyebrow, title, light = false, center = true }) {
  return (
    <div className={`mb-12 ${center ? "mx-auto max-w-2xl text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-bold uppercase tracking-widest ${
            light ? "text-secondary" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl leading-tight md:text-4xl ${light ? "text-white" : "text-heading"}`}>
        {title}
      </h2>
    </div>
  );
}
