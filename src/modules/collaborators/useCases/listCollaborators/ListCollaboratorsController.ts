import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCollaboratorsUseCase } from './ListCollaboratorsUseCase';

class ListCollaboratorsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCollaborators = container.resolve(ListCollaboratorsUseCase);

    const collaborators = await listCollaborators.execute();

    return response.status(200).json(classToClass(collaborators));
  }
}

export { ListCollaboratorsController };
