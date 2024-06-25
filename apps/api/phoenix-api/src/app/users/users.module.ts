import { Module } from '@nestjs/common';
import { UsersService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
