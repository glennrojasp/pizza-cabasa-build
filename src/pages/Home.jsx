import Hero from "../components/home/Hero";
import Marquee from "../components/Marquee";
import CategorySlider from "../components/home/CategorySlider";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import MenuPreview from "../components/home/MenuPreview";
import Testimonials from "../components/Testimonials";
import CtaWhatsApp from "../components/CtaWhatsApp";

const marqueeItems = ["Pizza Congelada", "Panninis", "Foccacia", "Desayuno", "Ingredientes frescos", "Pizza Italiana"];

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <CategorySlider />
      <AboutPreview />
      <WhyChooseUs />
      <MenuPreview />
      <Testimonials />
      <CtaWhatsApp />
    </>
  );
}
