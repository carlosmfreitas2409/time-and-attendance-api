import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../errors/AppError';

export function globalErrorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: 500,
    message: `Internal Server Error - ${err.message}`,
  });
}
