import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
  ForeignKey,
  HasMany,
  HasOne,
} from 'sequelize-typescript';
import { ContentType, Status } from './common';
import { ContentDetails } from './content-details.model';
import { PageSectionContent } from './page-section-content';
import { MetaInfo } from './meta-info.model';

@Table({ underscored: true, tableName: 'contents' })
export class Content extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @ForeignKey(() => Content)
  @Column
  parentId?: number;

  @Default(ContentType.post)
  @Column(DataType.ENUM(...Object.values(ContentType)))
  contentType: ContentType;

  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;

  @HasMany(() => Content, 'parent_id')
  contents: Content[];

  @HasMany(() => ContentDetails, 'content_id')
  details: ContentDetails[];

  @ForeignKey(() => MetaInfo)
  @Column
  metainfoId: number;

  @HasOne(() => MetaInfo, 'metainfo_id')
  metaInfo?: MetaInfo;

  @HasMany(() => PageSectionContent, 'content_id')
  pageSectionContent: PageSectionContent[];

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  createdAt: Date;

  @Default(DataType.NOW)
  @Column(DataType.DATE)
  updatedAt: Date;
}
