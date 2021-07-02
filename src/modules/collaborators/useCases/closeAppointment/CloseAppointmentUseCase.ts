import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IAppointmentsRepository } from '../../repositories/IAppointmentsRepository';
import { ICollaboratorsRepository } from '../../repositories/ICollaboratorsRepository';

interface IRequest {
  collaborator_matriculation: number;
}

@injectable()
class CloseAppointmentUseCase {
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

    const appointment = await this.appointmentsRepository.findUnclosed(
      collaborator.id,
    );

    if (!appointment) {
      throw new AppError('There is no appointment in progress', 404);
    }

    appointment.closed_at = new Date();

    await this.appointmentsRepository.update(appointment);
  }
}

export { CloseAppointmentUseCase };
