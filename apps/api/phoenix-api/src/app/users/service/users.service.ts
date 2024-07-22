import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
              private dataSource: DataSource,
              private jwtService: JwtService) {
  }

  async createUser(userDto: CreateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, 10);
    const user = new User();
    Object.assign(user, userDto);
    await this.dataSource.manager.save(user);
    const payload = { sub: user.id, user };
    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOne({ where: { username }, relations: {groups: true}});
  }

  findByUsername(username: string) {
    return this.usersRepository
      .createQueryBuilder('user')
      .where('user.username like :username', { username })
      .getMany();
  }

  findOneWithPassword(username: string): Promise<User> {
    return this.usersRepository.findOne({
      where: { username },
      select: {password: true}
    });
  }

  getUser(username: string) {
    return this.usersRepository.findOne({
      where: { username },
      relations: { groups: true },
      select: {
        groups: {
          id: true,
          name: true
        }
      }
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const newUser = new User();
    Object.assign(newUser, updateUserDto);
    return await this.dataSource.transaction((async manager => {
      return await manager.update(User, id, newUser);
    }));
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
