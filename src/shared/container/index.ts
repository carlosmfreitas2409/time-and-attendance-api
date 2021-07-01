import { container } from 'tsyringe';

import { SkillsRepository } from '../../modules/collaborators/repositories/implementations/SkillsRepository';
import { ISkillsRepository } from '../../modules/collaborators/repositories/ISkillsRepository';

container.registerSingleton<ISkillsRepository>(
  'SkillsRepository',
  SkillsRepository,
);
