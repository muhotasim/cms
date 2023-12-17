import { Module } from '@nestjs/common';
import { MenusService } from './menus.service';
import { MenuController } from './menus.controller';

@Module({
  controllers: [MenuController],
  providers: [MenusService],
})
export class MenusModule {}
