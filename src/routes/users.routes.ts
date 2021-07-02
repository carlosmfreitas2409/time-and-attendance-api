import { Router } from 'express';

import { IUserRequest } from '../modules/users/dtos/IUserRequest';
import { ensureAdmin } from '../modules/users/middlewares/ensureAdmin';
import { ensureAuthenticated } from '../modules/users/middlewares/ensureAuthenticated';
import { CreateUserController } from '../modules/users/useCases/createUser/CreateUserController';
import { UpdateUserPermissionController } from '../modules/users/useCases/updateUserPermission/UpdateUserPermissionController';
import { bodyValidation } from '../shared/middlewares/bodyValidation';

const usersRouter = Router();

const createUserController = new CreateUserController();
const updateUserPermissionController = new UpdateUserPermissionController();

usersRouter.post(
  '/',
  bodyValidation(IUserRequest),
  createUserController.handle,
);

usersRouter.patch(
  '/:user_id/permission',
  ensureAuthenticated,
  ensureAdmin,
  updateUserPermissionController.handle,
);

export { usersRouter };
