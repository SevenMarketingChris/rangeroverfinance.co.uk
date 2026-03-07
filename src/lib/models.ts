export interface ModelData {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  priceFrom: number;
  priceTo: number;
  typicalMonthly: number;
  typicalDeposit: number;
  typicalApr: number;
  typicalTerm: number;
  bodyType: string;
  engineOptions: string[];
  seatingCapacity: string;
  insuranceGroup: string;
  co2Range: string;
  fuelEconomy: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  financeOverview: string;
  pcpExample: { deposit: number; monthly: number; term: number; apr: number; balloon: number; totalCost: number };
  hpExample: { deposit: number; monthly: number; term: number; apr: number; totalCost: number };
  leaseExample: { initialRental: number; monthly: number; term: number; annualMileage: number };
}

export const models: ModelData[] = [
  {
    slug: "range-rover",
    name: "Range Rover",
    fullName: "Range Rover",
    tagline: "The pinnacle of luxury SUV refinement",
    priceFrom: 105000,
    priceTo: 215000,
    typicalMonthly: 899,
    typicalDeposit: 15000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Full-size luxury SUV",
    engineOptions: ["P400 Mild Hybrid", "P530 V8 Twin Turbo", "P460e PHEV", "P510e PHEV", "D350 Diesel"],
    seatingCapacity: "4-5 (SWB) or 5-7 (LWB)",
    insuranceGroup: "47-50",
    co2Range: "18-243 g/km",
    fuelEconomy: "24-404 mpg (PHEV)",
    metaTitle: "Range Rover Finance | Monthly Payments from £899 | PCP, HP & Lease Deals",
    metaDescription: "Finance a Range Rover from £899/month. Compare PCP, HP and lease deals. Free calculator, no obligation. Explore finance options for the flagship luxury SUV.",
    heroDescription: "The Range Rover represents the ultimate expression of luxury motoring. With prices starting from £105,000, flexible finance makes this flagship SUV accessible with monthly payments tailored to your budget.",
    financeOverview: "The Range Rover commands a premium price tag, but intelligent finance structuring can make ownership surprisingly attainable. With strong residual values — particularly on PHEV models — PCP deals offer competitive monthly payments. The Range Rover holds its value exceptionally well, typically retaining 55-60% after three years, which translates directly into lower monthly costs through PCP finance.",
    pcpExample: { deposit: 15000, monthly: 899, term: 48, apr: 6.9, balloon: 52500, totalCost: 110652 },
    hpExample: { deposit: 15000, monthly: 1895, term: 48, apr: 6.9, totalCost: 105960 },
    leaseExample: { initialRental: 5397, monthly: 1799, term: 48, annualMileage: 10000 },
  },
  {
    slug: "range-rover-sport",
    name: "Range Rover Sport",
    fullName: "Range Rover Sport",
    tagline: "Dynamic performance meets refined luxury",
    priceFrom: 79500,
    priceTo: 125000,
    typicalMonthly: 649,
    typicalDeposit: 10000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Performance luxury SUV",
    engineOptions: ["P400 Mild Hybrid", "P510e PHEV", "P530 V8 Twin Turbo", "D250 Diesel", "D300 Diesel"],
    seatingCapacity: "5",
    insuranceGroup: "44-50",
    co2Range: "18-243 g/km",
    fuelEconomy: "26-404 mpg (PHEV)",
    metaTitle: "Range Rover Sport Finance | From £649/month | PCP, HP & Lease Deals UK",
    metaDescription: "Finance a Range Rover Sport from £649/month. Compare PCP, HP and lease deals with our free calculator. No obligation quotes for new and used models.",
    heroDescription: "The Range Rover Sport combines exhilarating performance with unmistakable luxury. Starting from £79,500, finance options make this dynamic SUV achievable with competitive monthly payments across PCP, HP and lease deals.",
    financeOverview: "The Range Rover Sport is one of the most popular models in the range, and that popularity translates into strong residual values. Finance deals are competitive, with PCP being the most popular choice. The Sport's blend of performance and luxury makes it a compelling proposition, and PHEV models qualify for lower Benefit in Kind rates for company car drivers.",
    pcpExample: { deposit: 10000, monthly: 649, term: 48, apr: 6.9, balloon: 39750, totalCost: 80802 },
    hpExample: { deposit: 10000, monthly: 1495, term: 48, apr: 6.9, totalCost: 81760 },
    leaseExample: { initialRental: 3894, monthly: 1298, term: 48, annualMileage: 10000 },
  },
  {
    slug: "range-rover-evoque",
    name: "Range Rover Evoque",
    fullName: "Range Rover Evoque",
    tagline: "Compact luxury, unmistakable presence",
    priceFrom: 38500,
    priceTo: 55000,
    typicalMonthly: 389,
    typicalDeposit: 5000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Compact luxury SUV",
    engineOptions: ["P200 Petrol", "P250 Petrol", "P300e PHEV", "D165 Diesel"],
    seatingCapacity: "5",
    insuranceGroup: "28-37",
    co2Range: "32-182 g/km",
    fuelEconomy: "34-141 mpg (PHEV)",
    metaTitle: "Range Rover Evoque Finance | From £389/month | PCP, HP & Lease Deals",
    metaDescription: "Finance a Range Rover Evoque from £389/month. The most accessible Range Rover with competitive PCP, HP and lease deals. Free calculator, no obligation.",
    heroDescription: "The Range Rover Evoque is the most accessible way into Range Rover ownership. From £38,500, this compact luxury SUV delivers unmistakable design and capability with monthly payments that fit comfortably into most budgets.",
    financeOverview: "The Evoque is the entry point to the Range Rover family, and finance deals reflect its accessible positioning. PCP payments are remarkably competitive, making premium SUV ownership achievable. The PHEV model is particularly attractive for company car drivers, with low BIK rates significantly reducing tax liability. Strong demand in the used market supports healthy residual values.",
    pcpExample: { deposit: 5000, monthly: 389, term: 48, apr: 6.9, balloon: 16625, totalCost: 40297 },
    hpExample: { deposit: 5000, monthly: 749, term: 48, apr: 6.9, totalCost: 40952 },
    leaseExample: { initialRental: 2094, monthly: 698, term: 48, annualMileage: 10000 },
  },
  {
    slug: "range-rover-velar",
    name: "Range Rover Velar",
    fullName: "Range Rover Velar",
    tagline: "Avant-garde design, effortless sophistication",
    priceFrom: 48000,
    priceTo: 72000,
    typicalMonthly: 449,
    typicalDeposit: 7000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Mid-size luxury SUV",
    engineOptions: ["P250 Petrol", "P400 Petrol", "P400e PHEV", "D200 Diesel"],
    seatingCapacity: "5",
    insuranceGroup: "34-43",
    co2Range: "36-205 g/km",
    fuelEconomy: "31-130 mpg (PHEV)",
    metaTitle: "Range Rover Velar Finance | From £449/month | PCP, HP & Lease Deals UK",
    metaDescription: "Finance a Range Rover Velar from £449/month. Avant-garde luxury SUV with competitive PCP, HP and lease options. Free calculator and no obligation quotes.",
    heroDescription: "The Range Rover Velar bridges the gap between the Evoque and the Sport with its striking design and refined luxury. From £48,000, flexible finance options make this avant-garde SUV an attainable proposition.",
    financeOverview: "The Velar occupies a sweet spot in the Range Rover lineup — more spacious and prestigious than the Evoque, yet more affordable than the Sport. This positioning makes it an attractive finance proposition. The Velar's distinctive design ages well, supporting solid residual values that keep PCP payments competitive. PHEV models offer additional tax advantages for business users.",
    pcpExample: { deposit: 7000, monthly: 449, term: 48, apr: 6.9, balloon: 22800, totalCost: 51352 },
    hpExample: { deposit: 7000, monthly: 949, term: 48, apr: 6.9, totalCost: 52552 },
    leaseExample: { initialRental: 2694, monthly: 898, term: 48, annualMileage: 10000 },
  },
  {
    slug: "discovery",
    name: "Discovery",
    fullName: "Land Rover Discovery",
    tagline: "Versatile capability for the whole family",
    priceFrom: 58000,
    priceTo: 82000,
    typicalMonthly: 549,
    typicalDeposit: 8000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Full-size family SUV",
    engineOptions: ["P360 Petrol", "P400 Petrol", "D250 Diesel", "D300 Diesel"],
    seatingCapacity: "5+2 (7 seats)",
    insuranceGroup: "38-44",
    co2Range: "199-252 g/km",
    fuelEconomy: "26-37 mpg",
    metaTitle: "Land Rover Discovery Finance | From £549/month | PCP, HP & Lease Deals",
    metaDescription: "Finance a Land Rover Discovery from £549/month. The ultimate 7-seat family SUV with flexible PCP, HP and lease options. Free calculator, no obligation.",
    heroDescription: "The Land Rover Discovery is the ultimate family SUV — seven seats, genuine off-road capability, and premium comfort. From £58,000, finance options make this versatile vehicle accessible with manageable monthly payments.",
    financeOverview: "The Discovery is the go-to choice for families who need space, capability, and comfort in equal measure. As a 7-seater, it competes in a less crowded segment, which supports its residual values. Diesel models remain popular for their towing capability and fuel efficiency on longer journeys. PCP deals offer the most flexibility, with the option to hand back, refinance, or purchase at the end of the term.",
    pcpExample: { deposit: 8000, monthly: 549, term: 48, apr: 6.9, balloon: 26100, totalCost: 60452 },
    hpExample: { deposit: 8000, monthly: 1099, term: 48, apr: 6.9, totalCost: 60752 },
    leaseExample: { initialRental: 3294, monthly: 1098, term: 48, annualMileage: 10000 },
  },
  {
    slug: "discovery-sport",
    name: "Discovery Sport",
    fullName: "Land Rover Discovery Sport",
    tagline: "Compact versatility with 5+2 flexibility",
    priceFrom: 36000,
    priceTo: 52000,
    typicalMonthly: 349,
    typicalDeposit: 5000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Compact family SUV",
    engineOptions: ["P200 Petrol", "P250 Petrol", "P300e PHEV", "D165 Diesel", "D200 Diesel"],
    seatingCapacity: "5+2 (7 seats)",
    insuranceGroup: "25-34",
    co2Range: "36-194 g/km",
    fuelEconomy: "33-141 mpg (PHEV)",
    metaTitle: "Discovery Sport Finance | From £349/month | PCP, HP & Lease Deals UK",
    metaDescription: "Finance a Discovery Sport from £349/month. Compact 7-seat SUV with affordable PCP, HP and lease deals. Free calculator and no obligation quotes.",
    heroDescription: "The Discovery Sport packs 5+2 seating versatility into a compact footprint. Starting from just £36,000, it is the most affordable route into Land Rover's capable family of vehicles with competitive monthly finance options.",
    financeOverview: "The Discovery Sport is Land Rover's most accessible family SUV, and finance deals reflect this positioning. With 5+2 seating in a compact package, it appeals to young families who want capability without the bulk of the full-size Discovery. The PHEV model is a standout for company car drivers, offering very low BIK tax rates. PCP deals are the most popular choice, keeping monthly payments manageable.",
    pcpExample: { deposit: 5000, monthly: 349, term: 48, apr: 6.9, balloon: 15480, totalCost: 37202 },
    hpExample: { deposit: 5000, monthly: 699, term: 48, apr: 6.9, totalCost: 38552 },
    leaseExample: { initialRental: 1794, monthly: 598, term: 48, annualMileage: 10000 },
  },
  {
    slug: "defender",
    name: "Defender",
    fullName: "Land Rover Defender",
    tagline: "Unstoppable capability, modern icon",
    priceFrom: 55000,
    priceTo: 120000,
    typicalMonthly: 599,
    typicalDeposit: 8000,
    typicalApr: 6.9,
    typicalTerm: 48,
    bodyType: "Off-road capable SUV",
    engineOptions: ["P300 Petrol", "P400 Mild Hybrid", "P400e PHEV", "V8 P525", "D250 Diesel", "D300 Diesel"],
    seatingCapacity: "5-8 (depending on body style)",
    insuranceGroup: "36-50",
    co2Range: "28-277 g/km",
    fuelEconomy: "23-100 mpg (PHEV)",
    metaTitle: "Land Rover Defender Finance | From £599/month | PCP, HP & Lease Deals",
    metaDescription: "Finance a Land Rover Defender from £599/month. Iconic off-roader with flexible PCP, HP and lease options. Defender 90, 110 and 130 finance deals available.",
    heroDescription: "The Land Rover Defender is a modern icon — combining unstoppable off-road capability with contemporary luxury. From £55,000 across 90, 110 and 130 body styles, finance options make Defender ownership a reality.",
    financeOverview: "The Defender has become one of the most desirable vehicles on the market, and that desirability translates into exceptional residual values. Defenders hold their value better than almost any other SUV, with some models actually appreciating. This makes PCP finance particularly attractive, as strong residual values directly reduce monthly payments. The V8 and special editions can command premiums on the used market, making them a rare case where financing a new car can genuinely make financial sense.",
    pcpExample: { deposit: 8000, monthly: 599, term: 48, apr: 6.9, balloon: 33000, totalCost: 69652 },
    hpExample: { deposit: 8000, monthly: 1049, term: 48, apr: 6.9, totalCost: 58352 },
    leaseExample: { initialRental: 2997, monthly: 999, term: 48, annualMileage: 10000 },
  },
];

export function getModelBySlug(slug: string): ModelData | undefined {
  return models.find((m) => m.slug === slug);
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(amount);
}

export function formatCurrencyFull(amount: number): string {
  return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP", minimumFractionDigits: 2 }).format(amount);
}
