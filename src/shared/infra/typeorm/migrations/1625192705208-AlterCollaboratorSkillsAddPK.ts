import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterCollaboratorSkillsAddPK1625192705208
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createPrimaryKey('collaborator_skills', [
      'collaborator_id',
      'skill_id',
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropPrimaryKey('collaborator_skills');
  }
}
