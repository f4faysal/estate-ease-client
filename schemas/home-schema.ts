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
    hasGarden: z.boolean().default(false).optional(),
    hasGarage: z.boolean().default(false).optional(),
    hasInternet: z.boolean().default(false).optional(),
    hasSecurity: z.boolean().default(false).optional(),
    hasCleaning: z.boolean().default(false).optional(),
    hasAirConditioning: z.boolean().default(false).optional(),
  }),
});

export const homeSchema = z.object({
  home: homeData,
});
