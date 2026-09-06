import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { buildWhatsAppLink } from "../data/site";
import { sabopres as flavorCatalog } from "../data/menu";
import Reveal from "./Reveal";
import SaboresModal from "./SaboresModal";

export default function MenuItemCard({ item, delay = 0 }) {
  const [showFlavors, setShowFlavors] = useState(false);
  const isPack = item.type === "pack";

  // item.sabores guarda ids (ej. "sabor1"); acá se resuelven contra el
  // catálogo. Si algún id todavía no existe en el catálogo, se ignora en
  // vez de romper — el modal avisa si no queda ningún sabor cargado.
  const flavors = isPack
    ? (item.sabores ?? [])
        .map((id) => flavorCatalog.find((flavor) => flavor.id === id))
        .filter(Boolean)
    : [];

  const openFlavors = () => setShowFlavors(true);
  const ImageWrapper = isPack ? "button" : "div";

  return (
    <>
      <Reveal delay={delay} className="h-full">
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
          <ImageWrapper
            {...(isPack ? { type: "button", onClick: openFlavors } : {})}
            className={`flex h-44 w-full items-center justify-center bg-lighter p-4 ${
              isPack ? "cursor-pointer" : ""
            }`}
          >
            <img src={item.img} alt={item.title} className="max-h-full object-contain" />
          </ImageWrapper>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-bold text-heading">{item.title}</h3>
              {isPack && (
                <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
                  Elegí sabor
                </span>
              )}
            </div>
            <p className="mt-1 flex-1 text-sm text-muted">{item.desc}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="font-heading text-xl text-primary">
                {item.price ? `₡${item.price}` : "Consultar precio"}
              </span>
              {isPack ? (
                <button
                  type="button"
                  onClick={openFlavors}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-dark"
                  aria-label={`Elegir sabor para ${item.title}`}
                >
                  <i className="fas fa-list" />
                </button>
              ) : (
                <a
                  href={buildWhatsAppLink(`Hola! Quiero pedir: ${item.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-primary-dark"
                  aria-label={`Pedir ${item.title} por WhatsApp`}
                >
                  <i className="fab fa-whatsapp" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {showFlavors && (
          <SaboresModal item={item} flavors={flavors} onClose={() => setShowFlavors(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
