import GalleryGrid from "@/components/GalleryGrid";
import { PageBanner } from "@/components/HeroBanner";

export const metadata = {
  title: "Gallery",
  description: "Gallery of Jaipur Packers And Movers services including trucks, packing, loading, office shifting, and transportation.",
  alternates: { canonical: "/gallery" }
};

export default function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Our"
        accent="Gallery"
        description="Explore packing, loading, transportation, office shifting, trucks, and relocation work views."
      />
      <section className="section">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
