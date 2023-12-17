import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { User } from 'src/models';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel: Repository<User>,
  ) {}
}
