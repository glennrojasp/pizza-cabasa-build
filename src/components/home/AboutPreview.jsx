import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function AboutPreview() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <Reveal as="div">
          <div className="relative">
            <img
              src="/assets/images/about/about.jpg"
              alt="Pizza Cabasa"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <img
              src="/assets/images/about/about2.jpg"
              alt="Pizza Cabasa"
              className="absolute -bottom-8 -right-8 hidden w-40 rounded-2xl border-4 border-white shadow-xl sm:block"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
            Nosotros
          </span>
          <h2 className="mb-5 text-3xl md:text-4xl">Pizzas artesanales, hechas con cariño</h2>
          <p className="mb-6 text-base leading-relaxed">
            En Cabasa preparamos pizzas congeladas artesanales, panninis y foccacia
            con ingredientes frescos, pensadas para que las tengas listas cuando
            quieras y las recibas en la puerta de tu casa.
          </p>
          <Link
            to="/nosotros"
            className="inline-flex items-center gap-2 rounded-full bg-heading px-7 py-3.5 font-bold uppercase text-white transition hover:bg-primary"
          >
            Conocé más <i className="far fa-arrow-alt-right" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
