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
import { Status } from './common';
import { PageSectionContent } from './page-section-content';
@Table({ underscored: true, tableName: 'pages' })
export class Page extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;

  @HasMany(() => PageSectionContent, 'page_id')
  pageSectionContent: PageSectionContent[];
}
