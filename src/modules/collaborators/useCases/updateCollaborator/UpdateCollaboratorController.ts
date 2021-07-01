import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateCollaboratorUseCase } from './UpdateCollaboratorUseCase';

class UpdateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, phone_number, skills } = request.body;
    const { matriculation } = request.params;

    const updateCollaborator = container.resolve(UpdateCollaboratorUseCase);

    await updateCollaborator.execute({
      matriculation,
      name,
      email,
      cpf,
      phone_number,
      skills,
    });

    return response.status(204).send();
  }
}

export { UpdateCollaboratorController };
