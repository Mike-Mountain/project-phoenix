import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ListItemsService } from '../service/list-items.service';
import { CreateListItemDto } from '../dto/create-list-item.dto';
import { UpdateListItemDto } from '../dto/update-list-item.dto';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('list-items')
export class ListItemsController {
  constructor(private readonly listItemsService: ListItemsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createListItemDto: CreateListItemDto) {
    return this.listItemsService.create(createListItemDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.listItemsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listItemsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListItemDto: UpdateListItemDto) {
    return this.listItemsService.update(+id, updateListItemDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listItemsService.remove(+id);
  }
}
