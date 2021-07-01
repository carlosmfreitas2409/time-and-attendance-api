import { inject, injectable } from 'tsyringe';

import { Skill } from '../../entities/Skill';
import { ISkillsRepository } from '../../repositories/ISkillsRepository';

@injectable()
class ListSkillsUseCase {
  constructor(
    @inject('SkillsRepository')
    private skillsRepository: ISkillsRepository,
  ) {}

  async execute(): Promise<Skill[]> {
    const skills = this.skillsRepository.list();

    return skills;
  }
}

export { ListSkillsUseCase };
