import { getRepository, Repository } from 'typeorm';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../entities/User';
import { IUsersRepository } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByID(id: string): Promise<User> {
    return this.repository.findOne(id);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({ email });
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });

    await this.repository.save(user);
  }

  async save(user: User): Promise<void> {
    await this.repository.save(user);
  }
}

export { UsersRepository };
