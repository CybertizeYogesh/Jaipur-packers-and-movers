import { PageBanner } from "@/components/HeroBanner";
import TestimonialSlider from "@/components/TestimonialSlider";

export const metadata = {
  title: "Testimonials",
  description: "Customer reviews and testimonials for Jaipur Packers And Movers relocation services.",
  alternates: { canonical: "/testimonials" }
};

export default function TestimonialsPage() {
  return (
    <>
      <PageBanner
        title="Customer"
        accent="Testimonials"
        description="See what customers say about our packing, moving, loading, unloading, and delivery services."
      />
      <section className="section gray">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
    </>
  );
}
