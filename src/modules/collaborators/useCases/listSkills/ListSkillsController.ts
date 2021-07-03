import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListSkillsUseCase } from './ListSkillsUseCase';

class ListSkillsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSkills = container.resolve(ListSkillsUseCase);

    const skills = await listSkills.execute();

    return response.status(200).json(skills);
  }
}

export { ListSkillsController };
