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
import { Page } from './page.model';
import { Section } from './section.model';
import { Content } from './content.model';
import { Sequelize } from 'sequelize';
@Table({ underscored: true, tableName: 'page_section_content' })
export class PageSectionContent extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Page)
  @Column
  pageId: number;

  @ForeignKey(() => Section)
  @Column
  sectionId: number;

  @ForeignKey(() => Content)
  @Column
  contentId: number;

  @BelongsTo(() => Page, 'page_id')
  page: Page;

  @BelongsTo(() => Content, 'content_id')
  content: Content;

  @BelongsTo(() => Section, 'section_id')
  section: Section;

  @Default(Sequelize.fn('NOW'))
  @Column(DataType.DATE)
  createdAt: Date;

  @Default(Sequelize.fn('NOW'))
  @Column(DataType.DATE)
  updatedAt: Date;
}
