import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import MenuItemCard from "../components/MenuItemCard";
import { menuCategories } from "../data/menu";

export default function Menu() {
  const location = useLocation();
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const id = location.hash?.replace("#", "");
    if (id && menuCategories.some((c) => c.id === id)) {
      setActive(id);
    }
  }, [location.hash]);

  const activeCategory = menuCategories.find((c) => c.id === active) ?? menuCategories[0];

  return (
    <>
      <PageBanner title="Menú" />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Nuestra carta" title="Explorá el menú completo" />
          </Reveal>

          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-bold uppercase transition ${
                  active === cat.id
                    ? "border-primary bg-primary text-white"
                    : "border-black/10 text-heading hover:border-primary hover:text-primary"
                }`}
              >
                <i className={cat.icon} /> {cat.title}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeCategory.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
