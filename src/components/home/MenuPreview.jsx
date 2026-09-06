import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import SectionTitle from "../SectionTitle";
import MenuItemCard from "../MenuItemCard";
import { menuCategories } from "../../data/menu";

export default function MenuPreview() {
  const items = menuCategories[0].items.slice(0, 3);

  return (
    <section className="bg-lighter py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Menú popular" title="Explorá nuestras pizzas artesanales" />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <MenuItemCard key={item.id} item={item} delay={i * 0.1} />
          ))}
        </div>

        <Reveal className="mt-12 text-center" delay={0.2}>
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 rounded-full bg-heading px-8 py-3.5 font-bold uppercase text-white transition hover:bg-primary"
          >
            Ver menú completo <i className="far fa-arrow-alt-right" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
