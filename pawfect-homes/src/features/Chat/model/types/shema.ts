import { z } from "zod";

export const chatFormSchema = z.object({
  content: z.string(),
});

export type ChatFormInputs = z.infer<typeof chatFormSchema>;
