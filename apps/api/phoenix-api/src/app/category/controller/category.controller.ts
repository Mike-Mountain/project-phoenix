import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.categoryService.findOne(name);
  }

  @UseGuards(AuthGuard)
  @Get('search/:name')
  search(@Param('name') name: string) {
    return this.categoryService.search(name);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
