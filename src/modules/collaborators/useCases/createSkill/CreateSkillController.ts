import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateSkillUseCase } from './CreateSkillUseCase';

class CreateSkillController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createSkill = container.resolve(CreateSkillUseCase);

    await createSkill.execute(name);

    return response.status(201).send();
  }
}

export { CreateSkillController };
