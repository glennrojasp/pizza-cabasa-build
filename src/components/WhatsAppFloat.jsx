import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={buildWhatsAppLink("Hola! Quiero hacer un pedido 🍕")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <i className="fab fa-whatsapp text-3xl" />
    </motion.a>
  );
}
