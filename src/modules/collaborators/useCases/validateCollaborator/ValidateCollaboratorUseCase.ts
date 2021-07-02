import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

@injectable()
class ValidateCollaboratorUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  async execute(matriculation: string): Promise<void> {
    const collaborator = await this.collaboratorsRepository.findByID(
      Number(matriculation),
    );

    if (!collaborator) {
      throw new AppError('Collaborator does not exists!', 404);
    }

    collaborator.validated = true;
    collaborator.validated_at = new Date();

    await this.collaboratorsRepository.save(collaborator);
  }
}

export { ValidateCollaboratorUseCase };
