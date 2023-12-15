import {
  SequelizeOptionsFactory,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';
import * as BaseModel from '../models';
export class SequelizeConfig implements SequelizeOptionsFactory {
  createSequelizeOptions(): SequelizeModuleOptions {
    const { DB_HOST, DB_USER, DB_PASS, DB_PORT, DB_DATABASE } = process.env;
    return {
      dialect: 'mysql',
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USER,
      password: DB_PASS,
      database: DB_DATABASE,
      autoLoadModels: true,
      synchronize: true, // set to false in production
      logging: true, // enable logging to see SQL queries
      define: {
        timestamps: true,
        underscored: true,
      },
      sync: {
        force: true,
      },
      models: Object.values(BaseModel),
    };
  }
}
