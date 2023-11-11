import * as z from "zod";

export const adminSchema = z.object({
  name: z.object({
    firstName: z.string().min(1),
    middleName: z.string().optional(),
    lastName: z.string().min(1),
  }),
  gender: z.string(),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.number().min(11),
  emergencyContactNo: z.number().min(11),
  profileImage: z.string().url(),
  bloodGroup: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  // "presentAddress": "123 Main Street, City, Country",
  // "permanentAddress": "456 Park Avenue, City, Country",
});

export const userFormSchema = z.object({
  nidNumber: z.number().min(10),
  password: z.string().min(6),
  rentUser: adminSchema,
});
