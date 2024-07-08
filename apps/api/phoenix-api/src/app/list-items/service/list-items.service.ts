import { Injectable } from '@nestjs/common';
import { CreateListItemDto } from '../dto/create-list-item.dto';
import { UpdateListItemDto } from '../dto/update-list-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ListItem } from '../entities/list-item.entity';
import { CategoryService } from '../../category/service/category.service';

@Injectable()
export class ListItemsService {

  constructor(@InjectRepository(ListItem) private listItemRepository: Repository<ListItem>,
              private categoryService: CategoryService) {
  }

  async create(createListItemDto: CreateListItemDto) {
    const listItem = new ListItem();
    Object.assign(listItem, createListItemDto);
    let category = await this.categoryService.findOne(createListItemDto.category);
    if (!category) {
      category = await this.categoryService.create({name: createListItemDto.category});
    }
    listItem.category = category;
    return this.listItemRepository.save(listItem);
  }

  findAll() {
    return `This action returns all listItems`;
  }

  findOne(id: number) {
    return this.listItemRepository.findOne({where: {id}, relations: {category: true}});
  }

  update(id: number, updateListItemDto: UpdateListItemDto) {
    return `This action updates a #${id} listItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} listItem`;
  }
}
