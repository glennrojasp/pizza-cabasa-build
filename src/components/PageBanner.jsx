import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageBanner({ title, parent = "Inicio", parentTo = "/" }) {
  return (
    <div
      className="relative flex h-[280px] items-center justify-center bg-cover bg-center pt-24 md:h-[340px]"
      style={{ backgroundImage: "url(/assets/images/background/banner.jpg)" }}
    >
      <div className="absolute inset-0 bg-heading/75" />
      <motion.div
        className="relative z-10 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm uppercase tracking-widest text-white/80">
          <Link to={parentTo} className="hover:text-secondary">
            {parent}
          </Link>{" "}
          / <span className="text-secondary">{title}</span>
        </p>
      </motion.div>
    </div>
  );
}
