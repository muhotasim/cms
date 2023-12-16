import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Status } from './common';
import { PageSectionContent } from './page-section-content';
import { MetaInfo } from './meta-info.model';
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

  @ForeignKey(() => MetaInfo)
  @Column
  metainfoId: number;

  @HasOne(() => MetaInfo, 'metainfo_id')
  metaInfo: MetaInfo;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  createdAt: Date;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  updatedAt: Date;
}
