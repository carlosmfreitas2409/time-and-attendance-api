import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  findByID(id: string): Promise<User>;
  findByEmail(email: string): Promise<User>;
  create(data: ICreateUserDTO): Promise<void>;
  save(user: User): Promise<void>;
}

export { IUsersRepository };
