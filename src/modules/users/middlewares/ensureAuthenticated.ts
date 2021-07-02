import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing!', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '2b6d6b0a0bc64b296b702cf1c2e61fd6',
    ) as IPayload;

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token!', 401);
  }
}
