import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buildWhatsAppLink } from "../../data/site";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-cover bg-center pt-28"
      style={{ backgroundImage: "url(/assets/images/background/hero-two.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-heading/85 via-heading/60 to-heading/30" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 block font-heading text-6xl text-secondary md:text-8xl"
          >
            Pizza
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 max-w-md text-lg leading-relaxed text-white/90"
          >
            Las mejores pizzas congeladas 🍕❄️🇨🇷 artesanales 👨‍🍳 con entrega a
            domicilio 🏠. Pedidos al 8769&nbsp;7993.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={buildWhatsAppLink("Hola! Quiero hacer un pedido 🍕")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-bold uppercase text-white transition hover:bg-primary-dark"
            >
              Pedir ahora <i className="far fa-arrow-alt-right" />
            </a>
            <Link
              to="/menu"
              className="flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 font-bold uppercase text-white transition hover:bg-white hover:text-heading"
            >
              Ver menú
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="hidden justify-end md:flex"
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src="/assets/images/hero/pizza.png"
            alt="Pizza artesanal Cabasa"
            className="w-[420px] max-w-full drop-shadow-2xl"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      <motion.span
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-10 right-6 z-10 font-heading text-6xl text-white/90 md:right-14 md:text-8xl"
      >
        Cabasa
      </motion.span>
    </section>
  );
}
