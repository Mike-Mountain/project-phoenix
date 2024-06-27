import { Module } from '@nestjs/common';
import { GroupsService } from './service/groups.service';
import { GroupsController } from './controller/groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), UsersModule],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
