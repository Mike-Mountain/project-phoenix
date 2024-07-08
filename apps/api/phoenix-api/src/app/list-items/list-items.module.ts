import { Module } from '@nestjs/common';
import { ListItemsController } from './controller/list-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItem } from './entities/list-item.entity';
import { ListItemsService } from './service/list-items.service';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([ListItem]), CategoryModule],
  controllers : [ListItemsController],
  providers: [ListItemsService],
  exports: [ListItemsService]
})
export class ListItemsModule {}
