import { blogPosts, cities, services, site } from "@/utils/siteData";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/company-profile",
    "/mission-vision",
    "/our-team",
    "/gallery",
    "/testimonials",
    "/faq",
    "/blog",
    "/locations",
    "/privacy-policy",
    "/terms-conditions"
  ];
  const dynamicRoutes = [
    ...services.map((service) => `/services/${service.slug}`),
    ...cities.map((city) => `/locations/${city.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${site.baseUrl}${route}`,
    lastModified: new Date("2026-05-15"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
