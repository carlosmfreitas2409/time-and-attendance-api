import { getRepository, Repository } from 'typeorm';

import { ICreateCollaboratorDTO } from '../../dtos/ICreateCollaboratorDTO';
import { Collaborator } from '../../entities/Collaborator';
import { ICollaboratorsRepository } from '../ICollaboratorsRepository';

class CollaboratorsRepository implements ICollaboratorsRepository {
  private repository: Repository<Collaborator>;

  constructor() {
    this.repository = getRepository(Collaborator);
  }

  async list(): Promise<Collaborator[]> {
    return this.repository.find({
      order: { name: 'ASC' },
    });
  }

  async findByID(id: number): Promise<Collaborator> {
    return this.repository.findOne({
      where: { id },
      relations: ['appointments'],
    });
  }

  async findByEmail(email: string): Promise<Collaborator> {
    return this.repository.findOne({ email });
  }

  async findByCPF(cpf: number): Promise<Collaborator> {
    return this.repository.findOne({ cpf });
  }

  async create({
    name,
    email,
    cpf,
    phone_number,
    skills,
  }: ICreateCollaboratorDTO): Promise<void> {
    const collaborator = this.repository.create({
      name,
      email,
      cpf,
      phone_number,
      skills,
    });

    await this.repository.save(collaborator);
  }

  async save(collaborator: Collaborator): Promise<void> {
    await this.repository.save(collaborator);
  }
}

export { CollaboratorsRepository };
