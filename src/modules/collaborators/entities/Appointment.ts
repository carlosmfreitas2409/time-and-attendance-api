import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Collaborator } from './Collaborator';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  collaborator_id: number;

  @ManyToOne(() => Collaborator, collaborator => collaborator.appointments)
  @JoinColumn({ name: 'collaborator_id' })
  collaborator: Collaborator;

  @Column()
  closed_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

export { Appointment };
