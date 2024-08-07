import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { List } from '../../lists/entities/list.entity';

@Entity('Group')
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdBy: string;

  @ManyToMany(() => User, user => user.groups)
  @JoinTable()
  members: User[];

  @OneToMany(() => List, list => list.group)
  lists: List[];
}
