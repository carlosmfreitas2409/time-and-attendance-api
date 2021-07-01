import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ValidateCollaboratorUseCase } from './ValidateCollaboratorUseCase';

class ValidateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { matriculation } = request.params;

    const validateCollaborator = container.resolve(ValidateCollaboratorUseCase);

    await validateCollaborator.execute(matriculation);

    return response.status(204).send();
  }
}

export { ValidateCollaboratorController };
