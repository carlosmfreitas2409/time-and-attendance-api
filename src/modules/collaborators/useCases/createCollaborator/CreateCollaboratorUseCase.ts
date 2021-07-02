import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { ICollaboratorRequest } from '../../dtos/ICollaboratorRequest';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';
import { ISkillsRepository } from '../../repositories/ISkillsRepository';

@injectable()
class CreateCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,

    @inject('SkillsRepository')
    private skillsRepository: ISkillsRepository,
  ) {}

  async execute({
    name,
    email,
    cpf,
    phone_number,
    skills,
  }: ICollaboratorRequest): Promise<void> {
    const userEmailAlreadyExists =
      await this.collaboratorsRepository.findByEmail(email);

    const userCPFAlreadyExists = await this.collaboratorsRepository.findByCPF(
      cpf,
    );

    if (userEmailAlreadyExists)
      throw new AppError('Collaborator with this e-mail already exists!', 409);

    if (userCPFAlreadyExists)
      throw new AppError('Collaborator with this CPF already exists!', 409);

    const skillsList = await this.skillsRepository.listByIDs(skills);

    await this.collaboratorsRepository.create({
      name,
      email,
      cpf,
      phone_number,
      skills: skillsList,
    });
  }
}

export { CreateCollaboratorUseCase };
