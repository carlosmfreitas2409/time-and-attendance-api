import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICollaboratorRequest } from '../../dtos/ICollaboratorRequest';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';
import { ISkillsRepository } from '../../repositories/ISkillsRepository';

interface IRequest extends ICollaboratorRequest {
  matriculation: string;
}

@injectable()
class UpdateCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,

    @inject('SkillsRepository')
    private skillsRepository: ISkillsRepository,
  ) {}

  async execute({
    matriculation,
    name,
    email,
    cpf,
    phone_number,
    skills,
  }: IRequest): Promise<void> {
    const collaborator = await this.collaboratorsRepository.findByID(
      Number(matriculation),
    );

    if (!collaborator) {
      throw new AppError('Collaborator does not exists!');
    }

    const userEmailAlreadyExists =
      await this.collaboratorsRepository.findByEmail(email);

    const userCPFAlreadyExists = await this.collaboratorsRepository.findByCPF(
      cpf,
    );

    if (userEmailAlreadyExists && userEmailAlreadyExists.id !== collaborator.id)
      throw new AppError('Collaborator with this e-mail already exists!');

    if (userCPFAlreadyExists && userCPFAlreadyExists.id !== collaborator.id)
      throw new AppError('Collaborator with this CPF already exists!');

    collaborator.name = name;
    collaborator.email = email;
    collaborator.cpf = cpf;
    collaborator.phone_number = phone_number;

    const skillsList = await this.skillsRepository.listByIDs(skills);

    collaborator.skills = skillsList;

    await this.collaboratorsRepository.save(collaborator);
  }
}

export { UpdateCollaboratorUseCase };
