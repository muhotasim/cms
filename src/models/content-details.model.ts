import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Status } from './common';
import { Content } from './content.model';

@Table({ underscored: true, tableName: 'content_details' })
export class ContentDetails extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
  @ForeignKey(() => Content)
  @Column
  contentId: number;
  @Column(DataType.STRING(500))
  link: string;
  @Column(DataType.TEXT)
  details: string;
  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;

  @BelongsTo(() => Content)
  content: Content;
}
