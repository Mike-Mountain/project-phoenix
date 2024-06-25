import { EntitySchema } from 'typeorm';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export const UserSchema = new EntitySchema<User>({
  name: 'User',
  target: User,
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    username: {
      type: String
    }
  },
  // relations: {
  //   photos: {
  //     type: 'one-to-many',
  //     target: 'Photo'
  //   }
  // }
});
