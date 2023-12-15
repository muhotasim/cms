import {
  AutoIncrement,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
@Table({ underscored: true, tableName: 'meta_info' })
export class MetaInfo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.STRING)
  metaTitle: string;
  @Column(DataType.STRING(400))
  metaDescription: string;
  @Column(DataType.STRING(350))
  metaKeywords: string;
  @Column
  noFollow: boolean;
  @Column
  noIndex: boolean;
}
