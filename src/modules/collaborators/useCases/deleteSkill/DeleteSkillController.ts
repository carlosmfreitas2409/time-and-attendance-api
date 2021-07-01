import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteSkillUseCase } from './DeleteSkillUseCase';

class DeleteSkillController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteSkill = container.resolve(DeleteSkillUseCase);

    await deleteSkill.execute(Number(id));

    return response.status(204).send();
  }
}

export { DeleteSkillController };
