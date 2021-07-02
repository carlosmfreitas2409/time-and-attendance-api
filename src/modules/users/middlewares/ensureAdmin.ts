import { NextFunction, Request, Response } from 'express';

import { AppError } from '../../../errors/AppError';
import { UsersRepository } from '../repositories/implementations/UsersRepository';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { id } = request.user;

  const usersRepository = new UsersRepository();
  const user = await usersRepository.findByID(id);

  if (!user) {
    throw new AppError('User does not exist!', 404);
  }

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!", 403);
  }

  return next();
}
