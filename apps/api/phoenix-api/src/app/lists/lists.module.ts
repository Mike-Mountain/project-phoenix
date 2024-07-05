import { Module } from '@nestjs/common';
import { ListsController } from './controller/lists.controller';
import { ListsService } from './service/lists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from './entities/list.entity';
import { ListItemsModule } from '../list-items/list-items.module';

@Module({
  imports: [TypeOrmModule.forFeature([List]), ListItemsModule],
  controllers: [ListsController],
  providers: [ListsService]
})
export class ListsModule {
}
