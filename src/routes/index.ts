import { Router } from 'express';

import { appointmentsRouter } from './appointments.routes';
import { authenticateRouter } from './authenticate.routes';
import { collaboratorsRouter } from './collaborators.routes';
import { skillsRouter } from './skills.routes';
import { usersRouter } from './users.routes';

const router = Router();

router.use('/skills', skillsRouter);
router.use('/collaborators', collaboratorsRouter);
router.use('/appointments', appointmentsRouter);

router.use('/users', usersRouter);
router.use(authenticateRouter);

export { router };
