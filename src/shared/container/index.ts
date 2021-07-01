import { container } from 'tsyringe';

import { IAppointmentsRepository } from '../../modules/collaborators/repositories/IAppointmentsRepository';
import { ICollaboratorsRepository } from '../../modules/collaborators/repositories/ICollaboratorsRepository';
import { AppointmentsRepository } from '../../modules/collaborators/repositories/implementations/AppointmentsRepository';
import { CollaboratorsRepository } from '../../modules/collaborators/repositories/implementations/CollaboratorsRepository';
import { SkillsRepository } from '../../modules/collaborators/repositories/implementations/SkillsRepository';
import { ISkillsRepository } from '../../modules/collaborators/repositories/ISkillsRepository';

container.registerSingleton<ISkillsRepository>(
  'SkillsRepository',
  SkillsRepository,
);

container.registerSingleton<ICollaboratorsRepository>(
  'CollaboratorsRepository',
  CollaboratorsRepository,
);

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);
