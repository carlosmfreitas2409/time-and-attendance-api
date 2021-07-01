import { getRepository, In, Repository } from 'typeorm';

import { Skill } from '../../entities/Skill';
import { ISkillsRepository } from '../ISkillsRepository';

class SkillsRepository implements ISkillsRepository {
  private repository: Repository<Skill>;

  constructor() {
    this.repository = getRepository(Skill);
  }

  async list(): Promise<Skill[]> {
    return this.repository.find();
  }

  async listByIDs(ids: number[]): Promise<Skill[]> {
    return this.repository.find({
      where: { id: In(ids) },
    });
  }

  async findById(id: number): Promise<Skill> {
    return this.repository.findOne(id);
  }

  async findByName(name: string): Promise<Skill> {
    return this.repository.findOne({ name });
  }

  async create(name: string): Promise<void> {
    const skill = this.repository.create({
      name,
    });

    await this.repository.save(skill);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { SkillsRepository };
