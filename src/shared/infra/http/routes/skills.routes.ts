import { Router } from 'express';

import { CreateSkillController } from '@modules/collaborators/useCases/createSkill/CreateSkillController';
import { DeleteSkillController } from '@modules/collaborators/useCases/deleteSkill/DeleteSkillController';
import { ListSkillsController } from '@modules/collaborators/useCases/listSkills/ListSkillsController';
import { ensureAdmin } from '@modules/users/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@modules/users/middlewares/ensureAuthenticated';

const skillsRouter = Router();

const listSkillsController = new ListSkillsController();
const createSkillController = new CreateSkillController();
const deleteSkillController = new DeleteSkillController();

skillsRouter.get('/', listSkillsController.handle);

skillsRouter.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSkillController.handle,
);

skillsRouter.delete(
  '/:id',
  ensureAuthenticated,
  ensureAdmin,
  deleteSkillController.handle,
);

export { skillsRouter };
