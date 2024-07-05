import { Group } from '../../groups/entities/group.entity';

export class CreateListDto {
  name: string;
  createdBy: string;
  group: number;
}

