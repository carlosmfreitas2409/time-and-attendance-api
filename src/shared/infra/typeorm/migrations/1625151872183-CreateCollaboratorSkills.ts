import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCollaboratorSkills1625151872183
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'collaborator_skills',
        columns: [
          {
            name: 'collaborator_id',
            type: 'bigint',
          },
          {
            name: 'skill_id',
            type: 'bigint',
          },
        ],
        foreignKeys: [
          {
            name: 'FKCollaborator',
            referencedTableName: 'collaborators',
            referencedColumnNames: ['id'],
            columnNames: ['collaborator_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          {
            name: 'FKSkill',
            referencedTableName: 'skills',
            referencedColumnNames: ['id'],
            columnNames: ['skill_id'],
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('collaborator_skills');
  }
}
