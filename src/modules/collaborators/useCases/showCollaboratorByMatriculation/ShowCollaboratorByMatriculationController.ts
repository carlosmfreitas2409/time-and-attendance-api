import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowCollaboratorByMatriculationUseCase } from './ShowCollaboratorByMatriculationUseCase';

class ShowCollaboratorByMatriculationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { matriculation } = request.params;

    const showCollaborator = container.resolve(
      ShowCollaboratorByMatriculationUseCase,
    );

    const collaborator = await showCollaborator.execute(Number(matriculation));

    return response.status(200).json(classToClass(collaborator));
  }
}

export { ShowCollaboratorByMatriculationController };
