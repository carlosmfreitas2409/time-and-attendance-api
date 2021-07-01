import { Router } from 'express';

import { collaboratorsRouter } from './collaborators.routes';
import { skillsRouter } from './skills.routes';

const router = Router();

router.use('/skills', skillsRouter);
router.use('/collaborators', collaboratorsRouter);

export { router };
