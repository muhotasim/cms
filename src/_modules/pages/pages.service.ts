import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { Page } from 'src/models';

@Injectable()
export class PagesService {
  constructor(
    @InjectModel(Page) private readonly pageModel: Repository<Page>,
  ) {}
}
