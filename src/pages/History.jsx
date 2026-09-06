import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { historyMilestones } from "../data/history";
import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../data/gallery";

export default function History() {
  return (
    <>
      <PageBanner title="Historia" />
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Nuestro camino" title="La historia de Cabasa" />
          </Reveal>

          <div className="space-y-16">
            {historyMilestones.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                  <img src={m.img} alt={m.title} className="w-full rounded-2xl object-cover shadow-md" />
                  <div>
                    <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                      {m.year}
                    </span>
                    <h3 className="mb-3 text-2xl text-heading">{m.title}</h3>
                    <p className="leading-relaxed">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
              <div className="mx-auto max-w-7xl px-5 md:px-8">
                <Reveal>
                  <SectionTitle eyebrow="Momentos Cabasa" title="Nuestra galería" />
                </Reveal>
                <GalleryGrid images={galleryImages} />
              </div>
            </section>
    </>
  );
}