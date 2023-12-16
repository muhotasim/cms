import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/database';
import { CacheModule } from '@nestjs/cache-manager';
import * as BaseModel from './models';

@Module({
  imports: [
    SequelizeModule.forRootAsync({ useClass: SequelizeConfig }),
    SequelizeModule.forFeature(Object.values(BaseModel)),
    CacheModule.register(),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
