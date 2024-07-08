import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ListsService } from '../service/lists.service';
import { CreateListDto } from '../dto/create-list.dto';
import { UpdateListDto } from '../dto/update-list.dto';
import { CreateListItemDto } from '../../list-items/dto/create-list-item.dto';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('lists')
export class ListsController {
  constructor(private readonly listsService: ListsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.listsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListDto: UpdateListDto) {
    return this.listsService.update(+id, updateListDto);
  }

  @UseGuards(AuthGuard)
  @Patch('add/:id')
  addItems(@Param('id') id: string, @Body() items: CreateListItemDto[]) {
    return this.listsService.addItems(items, +id);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listsService.remove(+id);
  }
}
