import { getRepository, Repository } from 'typeorm';

import { Appointment } from '../../entities/Appointment';
import { IAppointmentsRepository } from '../IAppointmentsRepository';

class AppointmentsRepository implements IAppointmentsRepository {
  private repository: Repository<Appointment>;

  constructor() {
    this.repository = getRepository(Appointment);
  }

  async findUnclosed(collaborator_id: number): Promise<Appointment> {
    return this.repository.findOne({
      where: { collaborator_id, closed_at: null },
    });
  }

  async create(collaborator_id: number): Promise<void> {
    const appointment = this.repository.create({
      collaborator_id,
    });

    await this.repository.save(appointment);
  }

  async update(appointment: Appointment): Promise<void> {
    await this.repository.save(appointment);
  }
}

export { AppointmentsRepository };
