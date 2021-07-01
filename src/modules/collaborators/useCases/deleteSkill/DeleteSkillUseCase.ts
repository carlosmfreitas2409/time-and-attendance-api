import { inject, injectable } from 'tsyringe';

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
      throw new Error('Skill does not exist!');
    }

    await this.skillsRepository.delete(id);
  }
}

export { DeleteSkillUseCase };
