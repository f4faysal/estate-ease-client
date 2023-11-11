import * as z from "zod";

export const adminSchema = z.object({
  name: z.object({
    firstName: z.string().min(1),
    middleName: z.string().optional(),
    lastName: z.string().optional(),
  }),
  gender: z.string(),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string().min(11),
  emergencyContactNo: z.string(),
  designation: z.string().min(1),
  profileImage: z.string().url(),
});

export const adminFormSchema = z.object({
  nidNumber: z.string().min(10),
  password: z.string(),
  admin: adminSchema,
});
