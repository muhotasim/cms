import {
  Table,
  Column,
  Model,
  PrimaryKey,
  DataType,
  Default,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from 'sequelize-typescript';
import { Role } from './role.model';
import { Status } from './common';

@Table({ underscored: true, tableName: 'users' })
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @Column(DataType.STRING(120))
  userName: string;
  @Column(DataType.STRING(50))
  firstName: string;
  @Column(DataType.STRING(50))
  lastName: string;
  @Column(DataType.STRING(220))
  email: string;
  @Column
  password: string;
  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;
  @ForeignKey(() => Role)
  @Column
  roleId: number;

  @BelongsTo(() => Role, 'id')
  role: Role;

  @ForeignKey(() => User)
  @Column
  managerId: number;

  @BelongsTo(() => User, 'manager_id')
  manager: User;
}
