import { Column, Entity, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { List } from '../../lists/entities/list.entity';
import { Category } from '../../category/entities/category.entity';

@Entity('ListItem')
export class ListItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  createdBy: string;

  @Column()
  isComplete: boolean;

  @ManyToOne(() => List, list => list.items, {cascade: true})
  list: List;

  @ManyToOne(() => Category, category => category.items, { cascade: true })
  @JoinTable()
  category: Category;
}
