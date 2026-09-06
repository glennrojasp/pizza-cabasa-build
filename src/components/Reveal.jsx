import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

// Reemplaza el "data-aos=fade-up" del template original por una animación
// equivalente con Framer Motion, disparada al entrar en el viewport.
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Comp>
  );
}
