import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((src, i) => (
        <Reveal key={src} delay={(i % 6) * 0.06} className="overflow-hidden rounded-2xl">
          <motion.img
            src={src}
            alt="Cabasa"
            className="aspect-square w-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
          />
        </Reveal>
      ))}
    </div>
  );
}
