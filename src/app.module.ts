import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { SequelizeConfig } from './config/database';

@Module({
  imports: [SequelizeModule.forRootAsync({ useClass: SequelizeConfig })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
