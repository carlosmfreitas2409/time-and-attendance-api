import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skills')
class Skill {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}

export { Skill };
