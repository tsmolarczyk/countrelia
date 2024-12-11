export const REGIONS = [
  "Africa",
  "Antarctic",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
] as const;

export type Region = (typeof REGIONS)[number];
