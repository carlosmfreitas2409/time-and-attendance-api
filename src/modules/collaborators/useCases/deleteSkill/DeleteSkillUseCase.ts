import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ISkillsRepository } from '../../repositories/ISkillsRepository';

@injectable()
class DeleteSkillUseCase {
  constructor(
    @inject('SkillsRepository')
    private skillsRepository: ISkillsRepository,
  ) {}

  async execute(id: number): Promise<void> {
    const checkSkillExists = await this.skillsRepository.findById(id);

    if (!checkSkillExists) {
      throw new AppError('Skill does not exist!', 404);
    }

    await this.skillsRepository.delete(id);
  }
}

export { DeleteSkillUseCase };
