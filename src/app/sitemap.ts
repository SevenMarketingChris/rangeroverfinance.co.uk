import { MetadataRoute } from "next";

const BASE_URL = "https://www.rangeroverfinance.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/calculator", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/calculator/pcp", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/calculator/hp", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/calculator/lease", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/calculator/affordability", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/calculator/balloon-payment", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/calculator/part-exchange", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/compare", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/apply", priority: 0.9, changeFrequency: "monthly" as const },
    // Model pages
    { path: "/range-rover", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/range-rover-sport", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/range-rover-evoque", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/range-rover-velar", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/defender", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/discovery", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/discovery-sport", priority: 0.9, changeFrequency: "weekly" as const },
    // Finance type pages
    { path: "/pcp-deals", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/hp-finance", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/lease-deals", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/used-finance", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/bad-credit", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/business-finance", priority: 0.8, changeFrequency: "monthly" as const },
    // Guide pages
    { path: "/guides", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/how-car-finance-works", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/pcp-explained", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/pcp-vs-hp", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/balloon-payment-explained", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/deposit-guide", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/credit-score-car-finance", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/gap-insurance", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/negative-equity", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/early-settlement", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/guides/finance-vs-cash", priority: 0.7, changeFrequency: "monthly" as const },
    // Info pages
    { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/disclaimer", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/thank-you", priority: 0.1, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
