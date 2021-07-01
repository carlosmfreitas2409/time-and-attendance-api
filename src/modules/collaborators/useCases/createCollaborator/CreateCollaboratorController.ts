import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCollaboratorUseCase } from './CreateCollaboratorUseCase';

class CreateCollaboratorController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, cpf, phone_number, skills } = request.body;

    const createCollaborator = container.resolve(CreateCollaboratorUseCase);

    await createCollaborator.execute({
      name,
      email,
      cpf,
      phone_number,
      skills,
    });

    return response.status(201).send();
  }
}

export { CreateCollaboratorController };
