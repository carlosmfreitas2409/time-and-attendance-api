import { Router } from 'express';

import { ensureAuthenticated } from '@modules/users/middlewares/ensureAuthenticated';
import { ShowProfileController } from '@modules/users/useCases/showProfile/ShowProfileController';

const profileRouter = Router();

const showProfileController = new ShowProfileController();

profileRouter.get('/me', ensureAuthenticated, showProfileController.handle);

export { profileRouter };
