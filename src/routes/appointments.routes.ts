import { Router } from 'express';

import { CloseAppointmentController } from '../modules/collaborators/useCases/closeAppointment/CloseAppointmentController';
import { RecordAppointmentController } from '../modules/collaborators/useCases/recordAppointment/RecordAppointmentController';

const appointmentsRouter = Router();

const recordAppointmentController = new RecordAppointmentController();
const closeAppointmentController = new CloseAppointmentController();

appointmentsRouter.post(
  '/:collaborator_matriculation',
  recordAppointmentController.handle,
);

appointmentsRouter.patch(
  '/:collaborator_matriculation/close',
  closeAppointmentController.handle,
);

export { appointmentsRouter };
