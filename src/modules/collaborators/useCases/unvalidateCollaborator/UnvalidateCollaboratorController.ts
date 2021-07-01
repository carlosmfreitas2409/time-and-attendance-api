import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UnvalidateCollaboratorUseCase } from './UnvalidateCollaboratorUseCase';

class UnvalidateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { matriculation } = request.params;

    const unvalidateCollaborator = container.resolve(
      UnvalidateCollaboratorUseCase,
    );

    await unvalidateCollaborator.execute(matriculation);

    return response.status(204).send();
  }
}

export { UnvalidateCollaboratorController };
