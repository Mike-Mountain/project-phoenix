import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../groups/entities/group.entity';
import { group } from '@angular/animations';

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @ManyToMany(type => Group, group => group.members)
  groups: string[];
}
