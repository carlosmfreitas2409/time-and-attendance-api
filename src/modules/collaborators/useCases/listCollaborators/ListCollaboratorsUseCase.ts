import { inject, injectable } from 'tsyringe';

import { Collaborator } from '../../entities/Collaborator';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

@injectable()
class ListCollaboratorsUseCase {
  constructor(
    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  async execute(): Promise<Collaborator[]> {
    return this.collaboratorsRepository.list();
  }
}

export { ListCollaboratorsUseCase };
