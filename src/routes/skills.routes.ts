import { Router } from 'express';

import { CreateSkillController } from '../modules/collaborators/useCases/createSkill/CreateSkillController';
import { DeleteSkillController } from '../modules/collaborators/useCases/deleteSkill/DeleteSkillController';
import { ListSkillsController } from '../modules/collaborators/useCases/listSkills/ListSkillsController';

const skillsRouter = Router();

const listSkillsController = new ListSkillsController();
const createSkillController = new CreateSkillController();
const deleteSkillController = new DeleteSkillController();

skillsRouter.get('/', listSkillsController.handle);
skillsRouter.post('/', createSkillController.handle);
skillsRouter.delete('/:id', deleteSkillController.handle);

export { skillsRouter };
