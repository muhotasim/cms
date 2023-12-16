import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models';
import { Repository } from 'sequelize-typescript';

@Injectable()
export class AppService {
  constructor(@InjectModel(User) private readonly user: Repository<User>) {}
  getHello(): string {
    return 'Hello World!';
  }
}
