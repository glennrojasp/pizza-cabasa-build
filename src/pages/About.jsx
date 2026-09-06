import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import CtaWhatsApp from "../components/CtaWhatsApp";
import { site } from "../data/site";
import { team } from "../data/chefs";

const values = [
  { icon: "flaticon-high-quality", title: "Calidad", text: "Ingredientes frescos en cada pizza." },
  { icon: "flaticon-recommended-food", title: "Artesanal", text: "Masa y recetas hechas a mano." },
  { icon: "flaticon-fast-delivery", title: "Entrega", text: "Directo a tu casa, sin salir a comprar." },
];

export default function About() {
  return (
    <>
      <PageBanner title="Nosotros" />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <img
              src="/assets/images/about/menu-restaurant.jpg"
              alt={site.name}
              className="w-full rounded-3xl object-cover shadow-xl"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <SectionTitle eyebrow="Quiénes somos" title="Pasión por la pizza artesanal" center={false} />
            <p className="mb-4 leading-relaxed">{site.description}</p>
            <p className="leading-relaxed">
              (Pendiente) Contanos acá la historia corta de Cabasa: qué las inspiró
              a empezar, qué hace diferente su pizza y por qué la gente las elige.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-lighter py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Nuestros valores" title="Lo que nos representa" />
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-3xl text-primary">
                    <i className={v.icon} />
                  </div>
                  <h4 className="mb-2 text-xl text-heading">{v.title}</h4>
                  <p className="text-sm text-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Nuestro equipo" title="Quienes hacen posible cada pizza" />
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.id} delay={i * 0.08}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <img src={member.img} alt={member.name} className="h-64 w-full object-cover" />
                  <div className="p-5 text-center">
                    <h4
                      className={`text-lg font-bold ${
                        member.name === "Pendiente" ? "italic text-muted" : "text-heading"
                      }`}
                    >
                      {member.name === "Pendiente" ? "Nombre pendiente" : member.name}
                    </h4>
                    <span className="text-sm text-primary">{member.role}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaWhatsApp />
    </>
  );
}
