import { Module } from '@nestjs/common';
import { GroupsService } from './service/groups.service';
import { GroupsController } from './controller/groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { groupSchema } from './entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([groupSchema])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
