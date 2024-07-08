import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Group } from '../../groups/entities/group.entity';
import { ListItem } from '../../list-items/entities/list-item.entity';
import { CreateListDto } from '../dto/create-list.dto';

@Entity('List')
export class List {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdBy: string;

  @ManyToOne(() => Group, group => group.lists, {cascade: true})
  @JoinTable()
  group: Group;

  @OneToMany(() => ListItem, listItem => listItem.list)
  @JoinTable()
  items: ListItem[];
}
