import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ListItem } from '../../list-items/entities/list-item.entity';

@Entity('Category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ListItem, listItem => listItem.category)
  items: ListItem[];
}
