import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";

const features = [
  {
    icon: "flaticon-high-quality",
    title: "Ingredientes frescos",
    text: "Seleccionamos ingredientes frescos para cada pizza artesanal.",
  },
  {
    icon: "flaticon-recommended-food",
    title: "Recetas artesanales",
    text: "Masa y recetas propias, hechas a mano como una pizza italiana.",
  },
  {
    icon: "flaticon-fast-delivery",
    title: "Entrega a domicilio",
    text: "Pedí por WhatsApp y te la llevamos hasta la puerta.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-heading py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal>
          <img
            src="/assets/images/about/why-choose-us.jpg"
            alt="Por qué elegirnos"
            className="w-full rounded-3xl object-cover shadow-2xl"
          />
        </Reveal>

        <div>
          <Reveal>
            <SectionTitle
              eyebrow="Por qué elegirnos"
              title="Ofrecemos calidad que nuestros clientes necesitan"
              light
              center={false}
            />
          </Reveal>
          <div className="space-y-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20 text-2xl text-primary">
                    <i className={f.icon} />
                  </div>
                  <div>
                    <h4 className="text-lg text-white">{f.title}</h4>
                    <p className="text-sm text-white/70">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
