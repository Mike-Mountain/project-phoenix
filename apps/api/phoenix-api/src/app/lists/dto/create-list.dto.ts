import { CreateListItemDto } from '../../list-items/dto/create-list-item.dto';

export class CreateListDto {
  name: string;
  createdBy: string;
  group: number;
  items: CreateListItemDto[];
}

