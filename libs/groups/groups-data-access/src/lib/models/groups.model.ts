import { User } from '@project-phoenix/shared/shared-data-access';

export interface Group {
  id: number;
  name: string;
  createdBy: string;
  members: User[];
}
