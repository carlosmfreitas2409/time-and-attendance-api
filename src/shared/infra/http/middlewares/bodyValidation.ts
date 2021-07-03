import { transformAndValidate, ClassType } from 'class-transformer-validator';
import { NextFunction, Request, Response, RequestHandler } from 'express';

import { formatErrors } from '@utils/formatErrors';

export function bodyValidation(
  type: ClassType<Record<string, any>>,
): RequestHandler {
  return async (
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      await transformAndValidate(type, request.body);
      return next();
    } catch (errors) {
      return response.status(400).json({
        status: 400,
        message: 'Validation failed',
        errors: formatErrors(errors),
      });
    }
  };
}
