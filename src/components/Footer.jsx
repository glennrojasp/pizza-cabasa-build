import { Link } from "react-router-dom";
import { buildWhatsAppLink, site } from "../data/site";

const quickLinks = [
  { to: "/menu", label: "Menú" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/historia", label: "Historia" },
  { to: "/equipo", label: "Equipo" },
  { to: "/galeria", label: "Galería" },
  { to: "/contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative bg-heading bg-cover bg-center pt-16 text-white"
      style={{ backgroundImage: "url(/assets/images/background/footer-bg.png)" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 md:grid-cols-3 md:px-8">
        <div>
          <span className="font-heading text-3xl leading-none tracking-wide text-white">
            Pizza <span className="text-primary">Cabasa</span>
          </span>
          <p className="mt-4 text-sm text-white/70">{site.description}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp" />
            </a>
            {site.social.instagram && (
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
            )}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-primary"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h5 className="mb-5 uppercase tracking-wide text-secondary">Enlaces</h5>
          <ul className="space-y-2 text-sm text-white/80">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="mb-5 uppercase tracking-wide text-secondary">Contacto</h5>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <i className="fal fa-map-marker-alt mt-1 text-primary" />
              {site.address}
            </li>
            <li className="flex items-center gap-2">
              <i className="fal fa-clock text-primary" />
              {site.hours}
            </li>
            <li className="flex items-center gap-2">
              <i className="fab fa-whatsapp text-primary" />
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                {site.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {site.name}. Todos los derechos reservados.
      </div>
    </footer>
  );
}
