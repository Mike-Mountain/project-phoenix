import { Injectable } from '@nestjs/common';
import { CreateListDto } from '../dto/create-list.dto';
import { UpdateListDto } from '../dto/update-list.dto';
import { List } from '../entities/list.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ListItemsService } from '../../list-items/service/list-items.service';
import { CreateListItemDto } from '../../list-items/dto/create-list-item.dto';

@Injectable()
export class ListsService {

  constructor(private listItemsService: ListItemsService,
              @InjectRepository(List) private listRepository: Repository<List>) {
  }

  async create(createListDto: CreateListDto) {
    const list = new List();
    Object.assign(list, createListDto);
    list.items = [];
    for (const listItem of createListDto.items) {
      const item = await this.listItemsService.create(listItem);
      list.items.push(item);
    }
    return await this.listRepository.save(list);
  }

  findAll() {
    return this.listRepository.find({relations: {group: true}});
  }

  async findOne(id: number) {
    return await this.listRepository.findOne({
      where: { id },
      relations: {
        group: true,
        items: {
          category: true
        }
      }
    })
  }

  async addItems(items: CreateListItemDto[], id: number) {
    const list = await this.findOne(id);
    for (const listItem of items) {
      const item = await this.listItemsService.create(listItem);
      list.items.push(item);
    }
    return await this.listRepository.save(list);
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
