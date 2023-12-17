import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Page } from 'src/models';

@Module({
  imports: [SequelizeModule.forFeature([Page])],
  providers: [PagesService],
  controllers: [PagesController],
  exports: [PagesService],
})
export class PagesModule {}
