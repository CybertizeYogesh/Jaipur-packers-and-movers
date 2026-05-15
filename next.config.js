const legacyRedirects = [
  ["index.html", "/"],
  ["about-us.html", "/about"],
  ["contact-us.html", "/contact"],
  ["transportation.html", "/services/transportation"],
  ["local-shifting.html", "/services/local-shifting"],
  ["loading-unloading-services.html", "/services/loading-unloading"],
  ["carriers.html", "/services/car-transport"],
  ["warehousing.html", "/services/warehouse-storage"],
  ["office-shifting.html", "/services/office-relocation"],
  ["domestic-moving.html", "/services/domestic-relocation"],
  ["overview.html", "/company-profile"],
  ["mission-and-vision.html", "/mission-vision"],
  ["privacy-policy.html", "/privacy-policy"],
  ["terms-conditions.html", "/terms-conditions"],
  ["sitemap.html", "/sitemap.xml"]
];

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source: `/${source}`,
      destination,
      permanent: true
    }));
  }
};
