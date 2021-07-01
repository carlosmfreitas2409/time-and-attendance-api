import { ICreateCollaboratorDTO } from '../dtos/ICreateCollaboratorDTO';
import { Collaborator } from '../entities/Collaborator';

interface ICollaboratorsRepository {
  list(): Promise<Collaborator[]>;
  findByID(id: number): Promise<Collaborator>;
  findByEmail(email: string): Promise<Collaborator>;
  findByCPF(cpf: number): Promise<Collaborator>;
  create(data: ICreateCollaboratorDTO): Promise<void>;
  save(collaborator: Collaborator): Promise<void>;
}

export { ICollaboratorsRepository };
