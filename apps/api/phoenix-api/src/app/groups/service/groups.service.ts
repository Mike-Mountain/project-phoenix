import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../entities/group.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersService } from '../../users/service/users.service';

@Injectable()
export class GroupsService {

  constructor(@InjectRepository(Group) private groupsRepository: Repository<Group>,
              private usersService: UsersService,
              private datasource: DataSource) {
  }

  async create(createGroupDto: CreateGroupDto, id?: number) {
    const group = new Group();
    Object.assign(group, createGroupDto);
    group.members = [];
    for (const member of createGroupDto.members) {
      const user = await this.usersService.getUser(member);
      console.log(user);
      group.members.push(user);
      user.groups ? user.groups.push(group) : user.groups = [group];
      await this.datasource.manager.save(user);
    }
    if (id) {
      await this.groupsRepository.update(id, group)
    } else {
      await this.groupsRepository.save(group)
    }
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return this.groupsRepository.findOne({where: {id}, relations: {members: true}})
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return '';
  }

  async leaveGroup(username: string, id: number) {
    const group = await this.groupsRepository.findOne({where: {id}, relations: {members: true}});
    group.members = group.members.filter(member => member.username === username);
    if (group.members.length === 0) {
      await this.datasource.manager.remove(group);
    }
  }
}
