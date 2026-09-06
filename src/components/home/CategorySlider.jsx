import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { menuCategories } from "../../data/menu";
import SectionTitle from "../SectionTitle";
import Reveal from "../Reveal";

export default function CategorySlider() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Categoría de comida" title="Muchas opciones, de calidad y saludables" />
        </Reveal>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={2}
        loop
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="!px-5 md:!px-8"
      >
        {menuCategories.map((cat) => (
          <SwiperSlide key={cat.id}>
            <Link
              to={`/menu#${cat.id}`}
              className="group flex flex-col items-center rounded-2xl border border-black/5 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-lighter">
                <i className={`${cat.icon} text-4xl text-primary`} />
              </div>
              <h3 className="text-lg font-bold text-heading group-hover:text-primary">{cat.title}</h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
