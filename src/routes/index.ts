import { Router } from 'express';

import { skillsRouter } from './skills.routes';

const router = Router();

router.use('/skills', skillsRouter);

export { router };
