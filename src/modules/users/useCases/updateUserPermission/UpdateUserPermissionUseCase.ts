import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
  current_user_id: string;
}

@injectable()
class UpdateUserPermissionUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ current_user_id, user_id }: IRequest): Promise<void> {
    if (current_user_id === user_id) {
      throw new AppError('You cannot change the permission of yourself.', 403);
    }

    const user = await this.usersRepository.findByID(user_id);

    if (!user) {
      throw new AppError('User does not exists!', 404);
    }

    user.isAdmin = !user.isAdmin;

    await this.usersRepository.save(user);
  }
}

export { UpdateUserPermissionUseCase };
