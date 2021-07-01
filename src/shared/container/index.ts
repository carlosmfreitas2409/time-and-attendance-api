import { container } from 'tsyringe';

import { ICollaboratorsRepository } from '../../modules/collaborators/repositories/ICollaboratorsRepository';
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
