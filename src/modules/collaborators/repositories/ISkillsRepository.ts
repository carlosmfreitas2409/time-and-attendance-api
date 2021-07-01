import { Skill } from '../entities/Skill';

interface ISkillsRepository {
  list(): Promise<Skill[]>;
  findById(id: number): Promise<Skill>;
  findByName(name: string): Promise<Skill>;
  create(name: string): Promise<void>;
  delete(id: number): Promise<void>;
}

export { ISkillsRepository };
