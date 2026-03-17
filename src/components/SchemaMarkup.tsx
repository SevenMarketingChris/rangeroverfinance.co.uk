// Schema markup components for JSON-LD structured data

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Range Rover Finance",
    url: "https://rangeroverfinance.co.uk",
    description:
      "Compare Range Rover and Land Rover finance deals across PCP, HP and lease options. Free calculator for all models.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://rangeroverfinance.co.uk/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Range Rover Finance",
    url: "https://rangeroverfinance.co.uk",
    description: "UK finance comparison service for Range Rover and Land Rover vehicles.",
    areaServed: "GB",
    serviceType: "Vehicle Finance Comparison",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "English",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://rangeroverfinance.co.uk",
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function VehicleFinanceSchema({
  modelName,
  priceFrom,
  monthlyFrom,
  apr,
  url,
}: {
  modelName: string;
  priceFrom: number;
  monthlyFrom: number;
  apr: number;
  url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialProduct",
    name: `${modelName} Finance`,
    description: `PCP, HP and lease finance options for the ${modelName}. Monthly payments from £${monthlyFrom.toLocaleString()}.`,
    url,
    provider: {
      "@type": "Organization",
      name: "Range Rover Finance",
      url: "https://rangeroverfinance.co.uk",
    },
    feesAndCommissionsSpecification: `Representative APR ${apr}%`,
    amount: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      minValue: priceFrom,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
