import { useState } from "react";
import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import { buildWhatsAppLink, site } from "../data/site";

const infoItems = [
  { icon: "fal fa-map-marker-alt", title: "Ubicación", value: site.address },
  { icon: "fal fa-clock", title: "Horario", value: site.hours },
  { icon: "fab fa-whatsapp", title: "WhatsApp", value: site.whatsappDisplay },
];

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hola! Soy ${name || "un cliente"}.\n${message}`;
    window.open(buildWhatsAppLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <PageBanner title="Contacto" />
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-2 md:px-8">
          <Reveal>
            <span className="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-primary">
              Contacto
            </span>
            <h2 className="mb-8 text-3xl md:text-4xl">Hablemos por WhatsApp</h2>

            <div className="space-y-6">
              {infoItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl text-primary">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <span className="block text-sm font-bold uppercase text-heading">{item.title}</span>
                    <span>{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-lighter p-8 md:p-10">
              <h3 className="mb-2 text-2xl text-heading">Envianos un mensaje</h3>
              <p className="mb-6 text-sm text-muted">
                Este formulario abre WhatsApp con tu mensaje ya escrito — no
                necesitás esperar respuesta por correo.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-primary"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Escribí tu mensaje o pedido"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold uppercase text-white transition hover:brightness-110"
                >
                  <i className="fab fa-whatsapp" /> Enviar por WhatsApp
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
