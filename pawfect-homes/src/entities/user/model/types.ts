import { z } from "zod";

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  password: z.string(),
  createdAt: z.coerce.date(), // will convert ISO string to Date
  updatedAt: z.coerce.date(),
  isActivated: z.boolean(),
  activationLink: z.string().optional(),
});

// For an array of users
export const UsersSchema = z.array(UserSchema);

// Inferred TS type (optional, but useful)
export type IUser = z.infer<typeof UserSchema>;
