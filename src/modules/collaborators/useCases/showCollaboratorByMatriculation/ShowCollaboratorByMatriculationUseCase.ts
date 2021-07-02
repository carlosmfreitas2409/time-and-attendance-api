import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Collaborator } from '../../entities/Collaborator';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

@injectable()
class ShowCollaboratorByMatriculationUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  async execute(matriculation: number): Promise<Collaborator> {
    const collaborator = await this.collaboratorsRepository.findByID(
      matriculation,
    );

    if (!collaborator) {
      throw new AppError('Collaborator does not exist!', 404);
    }

    return collaborator;
  }
}

export { ShowCollaboratorByMatriculationUseCase };
