import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/database';
import { CacheModule } from '@nestjs/cache-manager';
// modules
import { UsersModule } from './_modules/users/users.module';
import { PagesModule } from './_modules/pages/pages.module';
import { MenusModule } from './_modules/memu/menus.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({ useClass: SequelizeConfig }),
    CacheModule.register(),
    UsersModule,
    PagesModule,
    MenusModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
