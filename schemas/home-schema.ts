import * as z from "zod";

export const homeData = z.object({
  title: z.string(),
  tageLine: z.string(),
  // tages: z.array(z.string()),
  tages: z.string(),
  price: z.string(),
  offerPrice: z.string(),
  address: z.string(),
  description: z.string(),
  images: z.array(z.string()).optional(),
  homeType: z.string(),
  residential: z.string(),
  location: z.string(),
  homeSizeDetails: z.object({
    numberOfRooms: z.string(),
    numberOfBathrooms: z.string(),
    numberOfBalconies: z.string(),
    numberOfWindos: z.string(),
    numberOfFloors: z.string(),
    sizePerUnit: z.string(),
    totalSQFT: z.string(),
  }),
  features: z.object({
    hasGarden: z.boolean().default(false),
    hasGarage: z.boolean().default(false),
    hasInternet: z.boolean().default(false),
    hasSecurity: z.boolean().default(false),
    hasCleaning: z.boolean().default(false),
    hasAirConditioning: z.boolean().default(false),
  }),
});

export const homeSchema = z.object({
  home: homeData,
});
