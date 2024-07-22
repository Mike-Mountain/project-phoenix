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
      group.members.push(user);
      user.groups ? user.groups.push(group) : user.groups = [group];
      await this.datasource.manager.save(user);
    }
    if (id) {
      return await this.groupsRepository.update(id, group)
    } else {
      return await this.groupsRepository.save(group)
    }
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return this.groupsRepository.findOne({where: {id}, relations: {members: true, lists: true}})
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  async addMembers(id: number, members: string[]) {
    const group = await this.findOne(id);
    for(const member of members) {
      const user = await this.usersService.getUser(member);
      console.log(user.groups.find(group => group.id === id));
      if (!(user.groups.find(group => group.id === id))) {
        user.groups.push(group);
        await this.datasource.manager.save(user);
      }
      group.members.push(user);
    }
    return await this.groupsRepository.update(id, group);
  }

  remove(id: number) {
    return '';
  }

  async leaveGroup(user: {username: string}, id: number) {
    const group = await this.groupsRepository.findOne({where: {id}, relations: {members: true}});
    const storedUser = await this.usersService.findOne(user.username);
    group.members = group.members.filter(member => member.username !== user.username)
    storedUser.groups = storedUser.groups.filter(group => group.id !== id);
    await this.datasource.manager.save(storedUser);
    if (group.members.length === 0) {
      return await this.datasource.manager.remove(group);
    } else {
      return await this.datasource.manager.save(group);
    }
  }
}
