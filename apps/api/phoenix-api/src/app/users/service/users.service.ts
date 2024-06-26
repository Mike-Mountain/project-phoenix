import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {

  salt = bcrypt.genSalt();

  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
              private dataSource: DataSource) {
  }

  async createUser(userDto: CreateUserDto) {
    userDto.password = await bcrypt.hash(userDto.password, 10);
    await this.dataSource.transaction(async manager => {
      const user = new User();
      Object.assign(user, userDto);
      await manager.save(user);
    });
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(username: string): Promise<User> {
    return this.usersRepository.findOneBy({ username });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const newUser = new User();
    Object.assign(newUser, updateUserDto);
    await this.dataSource.transaction((async manager => {
      await manager.update(User, id, newUser)
    }))
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
