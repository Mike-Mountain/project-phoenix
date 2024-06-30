import { Injectable } from '@nestjs/common';
import { CreateGroupDto } from '../dto/create-group.dto';
import { UpdateGroupDto } from '../dto/update-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from '../entities/group.entity';
import { DataSource, Repository } from 'typeorm';
import { UsersService } from '../../users/service/users.service';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class GroupsService {

  constructor(@InjectRepository(Group) private groupsRepository: Repository<Group>,
              private usersService: UsersService,
              private dataSource: DataSource) {
  }

  async create(createGroupDto: CreateGroupDto) {
    const group = new Group();
    Object.assign(group, createGroupDto);
    group.members = [];
    for (const member of createGroupDto.members) {
      const user = await this.usersService.getUser(member);
      group.members.push(user);
      user.groups ? user.groups.push(group) : user.groups = [group];
      await this.dataSource.manager.save(user);
    }
    await this.dataSource.manager.save(group);
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
    return `This action removes a #${id} group`;
  }
}
