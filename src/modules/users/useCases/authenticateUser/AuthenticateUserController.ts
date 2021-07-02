import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUser = container.resolve(AuthenticateUserUseCase);

    const user = await authenticateUser.execute({ email, password });

    return response.status(200).json(classToClass(user));
  }
}

export { AuthenticateUserController };
