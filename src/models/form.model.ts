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
import { Content } from './content.model';
import { Status } from './common';
enum FormFieldType {
  Text = 'text',
  Textarea = 'textarea',
  Number = 'number',
  Email = 'email',
  Date = 'date',
  Select = 'select',
  Radio = 'radio',
  Checkbox = 'checkbox',
}
@Table({ underscored: true, tableName: 'forms' })
export class Form extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => Content)
  @Column
  contentId: number;

  @Column
  @Default(FormFieldType.Text)
  @Column(DataType.ENUM(...Object.values(FormFieldType)))
  type: FormFieldType;

  @Column
  name: string;

  @Default(Status.Active)
  @Column(DataType.ENUM(...Object.values(Status)))
  status: Status;

  @BelongsTo(() => Content)
  content: Content;
}
