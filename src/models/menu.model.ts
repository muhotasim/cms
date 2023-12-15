import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Status } from './common';

@Table({ tableName: 'menus', underscored: true })
export class Menu extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @ForeignKey(() => Menu)
  @Column
  parentId?: number;

  @Column
  link?: string;

  @HasMany(() => Menu)
  menus: Menu[];

  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;
}
