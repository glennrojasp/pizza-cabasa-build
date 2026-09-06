import PageBanner from "../components/PageBanner";
import Reveal from "../components/Reveal";
import SectionTitle from "../components/SectionTitle";
import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../data/gallery";

export default function Gallery() {
  return (
    <>
      <PageBanner title="Galería" />
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <SectionTitle eyebrow="Momentos Cabasa" title="Nuestra galería" />
          </Reveal>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
