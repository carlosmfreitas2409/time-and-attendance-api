import { Appointment } from '../entities/Appointment';

interface IAppointmentsRepository {
  findUnclosed(collaborator_id: number): Promise<Appointment>;
  create(collaborator_id: number): Promise<void>;
  update(appointment: Appointment): Promise<void>;
}

export { IAppointmentsRepository };
