import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../data/site";

// Popup con el dropdown de sabores para un producto tipo "pack".
// Se monta con un portal a document.body porque el card vive dentro de un
// <Reveal> animado con Framer Motion: cualquier ancestro con "transform"
// (aunque sea transform: translateY(0)) rompe `position: fixed`, así que el
// modal no puede quedar anidado ahí adentro.
export default function SaboresModal({ item, flavors, onClose }) {
  const [selectedId, setSelectedId] = useState(flavors[0]?.id ?? "");
  const titleId = useId();
  const hasFlavors = flavors.length > 0;
  const selected = flavors.find((f) => f.id === selectedId);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [onClose]);

  const message = hasFlavors
    ? `Hola! Quiero pedir: ${item.title} - sabor: ${selected?.title ?? ""}`
    : `Hola! Quiero pedir: ${item.title}`;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-heading/70 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 16 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <span className="mb-1 block text-xs font-bold uppercase tracking-widest text-primary">
              Elegí el sabor
            </span>
            <h3 id={titleId} className="text-2xl text-heading">
              {item.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lighter text-heading transition hover:bg-primary hover:text-white"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        {!hasFlavors ? (
          <p className="mb-6 rounded-2xl bg-lighter p-4 text-sm text-muted">
            Todavía no cargamos los sabores disponibles para este pack.
            Escribinos por WhatsApp y te contamos las opciones.
          </p>
        ) : (
          <>
            {selected && (
              <div className="mb-5 flex items-center gap-4 rounded-2xl bg-lighter p-4">
                <img
                  src={selected.img}
                  alt={selected.title}
                  className="h-16 w-16 shrink-0 rounded-xl object-cover"
                />
                <div>
                  <h4 className="font-bold text-heading">{selected.title}</h4>
                  <p className="text-sm text-muted">{selected.desc}</p>
                </div>
              </div>
            )}

            <label htmlFor="sabor-select" className="mb-2 block text-sm font-bold uppercase text-heading">
              Sabor
            </label>
            <select
              id="sabor-select"
              value={selectedId}
              onChange={(event) => setSelectedId(event.target.value)}
              className="mb-6 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-primary"
            >
              {flavors.map((flavor) => (
                <option key={flavor.id} value={flavor.id}>
                  {flavor.title}
                </option>
              ))}
            </select>
          </>
        )}

        <a
          href={buildWhatsAppLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold uppercase text-white transition hover:brightness-110"
        >
          <i className="fab fa-whatsapp" /> Pedir por WhatsApp
        </a>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
