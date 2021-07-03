import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Appointment } from './Appointment';
import { Skill } from './Skill';

@Entity('collaborators')
class Collaborator {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  cpf: number;

  @Column({ nullable: true })
  phone_number: string;

  @ManyToMany(() => Skill)
  @JoinTable({
    name: 'collaborator_skills',
    joinColumn: {
      name: 'collaborator_id',
    },
    inverseJoinColumn: {
      name: 'skill_id',
    },
  })
  skills: Skill[];

  @Column()
  validated: boolean;

  @Column()
  validated_at: Date;

  @OneToMany(() => Appointment, appointment => appointment.collaborator)
  appointments: Appointment[];

  @CreateDateColumn()
  created_at: Date;

  @Expose({ name: 'matriculation' })
  getMatriculation(): string {
    const userID = String(this.id);
    return userID.padStart(4, '0');
  }
}

export { Collaborator };
