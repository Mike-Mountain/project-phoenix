import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('Group')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  createdBy: string;
  @ManyToMany(type => User, user => user.groups, { cascade: true })
  @JoinTable()
  members: User[];
}
