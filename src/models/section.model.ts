import {
  AutoIncrement,
  Column,
  PrimaryKey,
  Table,
  Model,
  Default,
  DataType,
  HasMany,
} from 'sequelize-typescript';
import { Status } from './common';
import { PageSectionContent } from './page-section-content';
@Table({ underscored: true, tableName: 'sections' })
export class Section extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;
  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;

  @HasMany(() => PageSectionContent, 'section_id')
  pageSectionContent: PageSectionContent[];
}
