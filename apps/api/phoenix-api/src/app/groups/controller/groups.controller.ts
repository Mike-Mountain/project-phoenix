import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { GroupsService } from '../service/groups.service';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { AuthGuard } from '../../auth/guard/auth.guard';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @UseGuards(AuthGuard)
  @Post('leave/:id')
  leaveGroup(@Body() user: { username: string }, @Param('id') id: number) {
    return this.groupsService.leaveGroup(user, id);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: CreateGroupDto) {
    return this.groupsService.create(updateGroupDto);
  }

  @UseGuards(AuthGuard)
  @Patch('members/:id')
  addMembers(@Param('id') id: string, @Body() members: string[]) {
    return this.groupsService.addMembers(+id, members)
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
}
