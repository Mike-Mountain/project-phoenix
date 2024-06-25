import { EntitySchema } from "typeorm";
import { User } from "../../users/entities/user.entity";

export class Group {
  id: number;
  name: string;
  members: User[];
}

export const groupSchema = new EntitySchema<Group>({
  name: 'Group',
  target: Group,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    name: {
      type: String
    }
  },
  relations: {
    members: {
      type: 'one-to-many',
      target: 'User'
    }
  }
})
