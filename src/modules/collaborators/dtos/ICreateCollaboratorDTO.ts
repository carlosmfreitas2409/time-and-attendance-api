import { Skill } from '../entities/Skill';

interface ICreateCollaboratorDTO {
  name: string;
  email: string;
  cpf: number;
  phone_number: string;
  skills: Skill[];
}

export { ICreateCollaboratorDTO };
