import { site } from "@/utils/siteData";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${site.baseUrl}/sitemap.xml`,
    host: site.baseUrl
  };
}
