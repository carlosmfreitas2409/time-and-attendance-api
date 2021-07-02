import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserPermissionUseCase } from './UpdateUserPermissionUseCase';

class UpdateUserPermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.params;
    const { id: current_user_id } = request.user;

    const updateUserPermission = container.resolve(UpdateUserPermissionUseCase);

    await updateUserPermission.execute({ user_id, current_user_id });

    return response.status(201).send();
  }
}

export { UpdateUserPermissionController };
