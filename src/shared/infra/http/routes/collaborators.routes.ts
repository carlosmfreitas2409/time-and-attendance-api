import { Router } from 'express';

import { ICollaboratorRequest } from '@modules/collaborators/dtos/ICollaboratorRequest';
import { CreateCollaboratorController } from '@modules/collaborators/useCases/createCollaborator/CreateCollaboratorController';
import { ListCollaboratorsController } from '@modules/collaborators/useCases/listCollaborators/ListCollaboratorsController';
import { ShowCollaboratorByMatriculationController } from '@modules/collaborators/useCases/showCollaboratorByMatriculation/ShowCollaboratorByMatriculationController';
import { UnvalidateCollaboratorController } from '@modules/collaborators/useCases/unvalidateCollaborator/UnvalidateCollaboratorController';
import { UpdateCollaboratorController } from '@modules/collaborators/useCases/updateCollaborator/UpdateCollaboratorController';
import { ValidateCollaboratorController } from '@modules/collaborators/useCases/validateCollaborator/ValidateCollaboratorController';
import { ensureAdmin } from '@modules/users/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@modules/users/middlewares/ensureAuthenticated';
import { bodyValidation } from '@shared/infra/http/middlewares/bodyValidation';

const collaboratorsRouter = Router();

const listCollaboratorsController = new ListCollaboratorsController();
const showCollaboratorByMatriculationController =
  new ShowCollaboratorByMatriculationController();
const createCollaboratorController = new CreateCollaboratorController();
const updateCollaboratorController = new UpdateCollaboratorController();
const validateCollaboratorController = new ValidateCollaboratorController();
const unvalidateCollaboratorController = new UnvalidateCollaboratorController();

collaboratorsRouter.get('/', listCollaboratorsController.handle);

collaboratorsRouter.get(
  '/:matriculation',
  showCollaboratorByMatriculationController.handle,
);

collaboratorsRouter.post(
  '/',
  bodyValidation(ICollaboratorRequest),
  createCollaboratorController.handle,
);

collaboratorsRouter.put(
  '/:matriculation',
  bodyValidation(ICollaboratorRequest),
  updateCollaboratorController.handle,
);

collaboratorsRouter.patch(
  '/:matriculation/validate',
  ensureAuthenticated,
  ensureAdmin,
  validateCollaboratorController.handle,
);

collaboratorsRouter.patch(
  '/:matriculation/unvalidate',
  ensureAuthenticated,
  ensureAdmin,
  unvalidateCollaboratorController.handle,
);

export { collaboratorsRouter };
