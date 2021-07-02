import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

interface IRequest {
  collaborator_matriculation: number;
}

@injectable()
class RecordAppointmentUseCase {
  constructor(
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,

    @inject('CollaboratorsRepository')
    private collaboratorsRepository: ICollaboratorsRepository,
  ) {}

  async execute({ collaborator_matriculation }: IRequest): Promise<void> {
    const collaborator = await this.collaboratorsRepository.findByID(
      collaborator_matriculation,
    );

    if (!collaborator) {
      throw new AppError('Collaborator does not exist.', 404);
    }

    if (!collaborator.validated) {
      throw new AppError('Collaborator is not validated.', 401);
    }

    const checkAppointmentUnclosed =
      await this.appointmentsRepository.findUnclosed(collaborator.id);

    if (checkAppointmentUnclosed) {
      throw new AppError('Already have a appointment in progress.', 409);
    }

    await this.appointmentsRepository.create(collaborator.id);
  }
}

export { RecordAppointmentUseCase };
