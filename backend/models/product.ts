import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
  Default,
} from "sequelize-typescript";
import category from "./categories";
import customer from "./customer";
import order from "./order";

@Table
class product extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @Default(0) //sets default value 0
  @Column
  recordStatus: number;

  @ForeignKey(() => category)
  @Column
  categoryId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => category)
  category: category;

  @BelongsToMany(() => customer, () => order)
  customer: customer[];
}
export default product;
