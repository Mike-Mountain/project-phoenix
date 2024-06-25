import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Redant09',
      database: 'users',
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule,
    GroupsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
