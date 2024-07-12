import { Injectable } from '@nestjs/common';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {

  constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {
  }

  create(createCategoryDto: CreateCategoryDto) {
    const category = new Category();
    Object.assign(category, createCategoryDto);
    return this.categoryRepository.save(category);
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(name: string) {
    return this.categoryRepository.findOne({ where: { name } });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  search(name: string) {
    return this.categoryRepository
      .createQueryBuilder('category')
      .where('category.name like :name', { name })
      .getMany();
  }
}
