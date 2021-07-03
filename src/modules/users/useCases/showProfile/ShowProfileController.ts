import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowProfileUseCase } from './ShowProfileUseCase';

class ShowProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id: user_id } = request.user;

    const showProfile = container.resolve(ShowProfileUseCase);

    const profile = await showProfile.execute(user_id);

    return response.status(200).json(classToClass(profile));
  }
}

export { ShowProfileController };
