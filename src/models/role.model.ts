import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Sequelize } from 'sequelize';
@Table({ underscored: true, tableName: 'roles' })
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @HasMany(() => User, 'role_id')
  users: User[];

  @Default(Sequelize.fn('NOW'))
  @Column(DataType.DATE)
  createdAt: Date;

  @Default(Sequelize.fn('NOW'))
  @Column(DataType.DATE)
  updatedAt: Date;
}
