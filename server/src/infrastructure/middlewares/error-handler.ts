import { Request, Response, NextFunction } from "express";
import { AppError } from "../../core/errors/app-error";

export function ErrorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  console.error(`Error occurred: ${error.stack}`);

  if (error instanceof AppError) {
    // Handle known operational errors
    res.status(error.statusCode).json({
      message: error.message,
      status: error.statusCode,
      errors: error.errors
    });
    return;
  }

  // Handle unknown errors (e.g., programming errors)
  res.status(500).json({
    error: "Internal server error",
    status: 500,
  });
}