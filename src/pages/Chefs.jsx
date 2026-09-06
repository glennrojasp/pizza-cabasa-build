import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import { team } from "../data/chefs";

export default function Chefs() {
  return (
    <>
      <PageBanner title="Equipo" />
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
    </>
  );
}
