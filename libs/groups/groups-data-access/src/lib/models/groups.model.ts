import { User } from '@project-phoenix/shared/shared-data-access';
import { List } from '@project-phoenix/lists-data-access';

export interface Group {
  id: number;
  name: string;
  createdBy: string;
  members: User[];
  lists: Partial<List>[];
}
