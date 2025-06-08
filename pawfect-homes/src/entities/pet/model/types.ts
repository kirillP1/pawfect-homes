import { z } from "zod";

// Enum-like literals
export const PetSpeciesSchema = z.enum(["dog", "cat", "bird", "other"]);
export const PetGenderSchema = z.enum(["male", "female"]);

// Main Pet schema
export const PetSchema = z.object({
  id: z.string(),
  name: z.string(),
  species: PetSpeciesSchema,
  breed: z.string(),
  age: z.number(),
  gender: PetGenderSchema,
  adoptionFee: z.number(),
  imageUrl: z.string().url(),
  description: z.string().optional(),
  shelterId: z.string(),
  isAdopted: z.boolean(),
  createdAt: z.coerce.date(), // coerce from string to Date
  updatedAt: z.coerce.date(),
});

// Array schema if needed
export const PetsSchema = z.array(PetSchema);

// Optional: Type inference
export type IPet = z.infer<typeof PetSchema>;
export type IPetSpecies = z.infer<typeof PetSpeciesSchema>;
export type IPetGender = z.infer<typeof PetGenderSchema>;
