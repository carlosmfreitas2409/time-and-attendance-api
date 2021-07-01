import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

@injectable()
class UnvalidateCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  async execute(matriculation: string): Promise<void> {
    const collaborator = await this.collaboratorsRepository.findByID(
      Number(matriculation),
    );

    if (!collaborator) {
      throw new AppError('Collaborator does not exists!');
    }

    collaborator.validated = false;
    collaborator.validated_at = new Date();

    await this.collaboratorsRepository.save(collaborator);
  }
}

export { UnvalidateCollaboratorUseCase };
