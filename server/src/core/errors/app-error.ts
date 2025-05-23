import { ZodIssue } from 'zod'

type IAppError = Error | ZodIssue

export class AppError extends Error {
  constructor(
    readonly statusCode: number,
    readonly message: string,
    readonly errors: IAppError[] = [],
    readonly isOperational: boolean = true
  ) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class BadRequestErrors extends AppError {
  constructor(message: string, errors?: IAppError[]) {
    super(400, message, errors);
  }
}

export class ValidationError extends AppError {
  constructor(message: string, errors?: IAppError[]) {
    super(400, message, errors);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(404, message);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string) {
    super(403, message);
  }
}