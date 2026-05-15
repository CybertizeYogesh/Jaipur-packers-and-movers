import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { defaultDescription, site } from "@/utils/siteData";
import "@/styles/globals.css";

export const metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Best Packers and Movers in Jaipur - Jaipur Packers And Movers",
    template: "%s | Jaipur Packers And Movers"
  },
  description: defaultDescription,
  keywords: [
    "packers and movers in jaipur",
    "jaipur packers and movers",
    "movers and packers in jaipur",
    "shifting service in jaipur",
    "car transportation service",
    "local shifting service in jaipur"
  ],
  icons: {
    icon: "/favicon/favicon-icon.png",
    shortcut: "/favicon/favicon-icon.png"
  },
  openGraph: {
    title: "Jaipur Packers And Movers",
    description: defaultDescription,
    url: site.baseUrl,
    siteName: "Jaipur Packers And Movers",
    images: [{ url: "/images/header-bg-img.jpg", width: 1200, height: 630, alt: "Jaipur Packers And Movers" }],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaipur Packers And Movers",
    description: defaultDescription,
    images: ["/images/header-bg-img.jpg"]
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: site.name,
    url: site.baseUrl,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "35-A, JagdambaNagar - E, Near Rawan Gate, Kalwar Road",
      addressLocality: "Jaipur",
      addressRegion: "Rajasthan",
      postalCode: "302012",
      addressCountry: "IN"
    },
    openingHours: "Mo-Su 08:00-21:00"
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
