import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { ValidationError } from "../../core/errors/app-error";

export function validateRequest(schema: z.ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Validate request body
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Extract and format validation errors
        // const messages = error.errors.map((err) => err.message).join(", ");
        throw new ValidationError(`Validation failed`, error.errors);
      }
      next(error); // Pass unexpected errors to ErrorHandler
    }
  };
}