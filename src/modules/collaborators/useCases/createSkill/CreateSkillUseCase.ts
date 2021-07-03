import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ISkillsRepository } from '../../repositories/ISkillsRepository';

@injectable()
class CreateSkillUseCase {
  constructor(
    @inject('SkillsRepository')
    private skillsRepository: ISkillsRepository,
  ) {}

  async execute(name: string): Promise<void> {
    const skillAlreadyExists = await this.skillsRepository.findByName(name);

    if (skillAlreadyExists) {
      throw new AppError('Skill already exists!', 409);
    }

    await this.skillsRepository.create(name);
  }
}

export { CreateSkillUseCase };
