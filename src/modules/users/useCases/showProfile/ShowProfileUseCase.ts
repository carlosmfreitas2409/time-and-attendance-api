import { inject, injectable } from 'tsyringe';

import { User } from '@modules/users/entities/User';
import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(user_id: string): Promise<User> {
    const user = await this.usersRepository.findByID(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 404);
    }

    return user;
  }
}

export { ShowProfileUseCase };
