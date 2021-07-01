import { Router } from 'express';

import { appointmentsRouter } from './appointments.routes';
import { collaboratorsRouter } from './collaborators.routes';
import { skillsRouter } from './skills.routes';

const router = Router();

router.use('/skills', skillsRouter);
router.use('/collaborators', collaboratorsRouter);
router.use('/appointments', appointmentsRouter);

export { router };
