import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <SectionTitle eyebrow="Testimonios" title="Lo que dicen de Cabasa" />
        </Reveal>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="rounded-2xl bg-lighter p-10 text-center">
                <i className="flaticon-quote mb-4 block text-3xl text-primary" />
                <p className="mb-6 text-lg italic text-heading">“{t.text}”</p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="mx-auto mb-3 h-16 w-16 rounded-full object-cover"
                />
                <h5 className="text-base font-bold text-heading">{t.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
