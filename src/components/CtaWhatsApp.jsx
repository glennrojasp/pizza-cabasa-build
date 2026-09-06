import Reveal from "./Reveal";
import { buildWhatsAppLink, site } from "../data/site";

export default function CtaWhatsApp() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: "url(/assets/images/background/booking-table.jpg)" }}
    >
      <div className="absolute inset-0 bg-heading/80" />
      <div className="relative mx-auto max-w-3xl px-5 text-center text-white md:px-8">
        <Reveal>
          <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-secondary">
            ¿Antojo de pizza?
          </span>
          <h2 className="mb-6 text-3xl md:text-4xl">Hacé tu pedido ahora mismo por WhatsApp</h2>
          <a
            href={buildWhatsAppLink("Hola! Quiero hacer un pedido 🍕")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 text-lg font-bold uppercase text-white transition hover:brightness-110"
          >
            <i className="fab fa-whatsapp text-2xl" /> {site.whatsappDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
