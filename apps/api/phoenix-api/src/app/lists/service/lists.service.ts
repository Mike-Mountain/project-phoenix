import { Injectable } from '@nestjs/common';
import { CreateListDto } from '../dto/create-list.dto';
import { UpdateListDto } from '../dto/update-list.dto';
import { List } from '../entities/list.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ListItem } from '../../list-items/entities/list-item.entity';
import { GroupsService } from '../../groups/service/groups.service';

@Injectable()
export class ListsService {

  constructor(private datasource: DataSource,
              @InjectRepository(List) private listRepository: Repository<List>,
              @InjectRepository(List) private listItemRepository: Repository<ListItem>) {
  }

  async create(createListDto: CreateListDto) {
    const list = new List();
    Object.assign(list, createListDto);
    // list.group = await this.groupsService.findOne(createListDto.group);
    list.items.forEach((listItem: ListItem) => {
      const item = new ListItem();
      Object.assign(item, listItem);
      this.listItemRepository.save(item)
    })
    await this.listRepository.save(list);
  }

  findAll() {
    return this.listRepository.find({relations: {group: true}});
  }

  findOne(id: number) {
    return this.listRepository.findOne({where: {id}, relations: {group: true}})
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
