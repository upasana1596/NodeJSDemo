import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  BelongsToMany,
  Default,
  DataType,
  HasMany,
} from "sequelize-typescript";
import order from "./order";
import product from "./product";

@Table
class customer extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column(DataType.BIGINT)
  mobileNo: number;

  @Column
  city: string;

  @Column
  address: string;

  @Column
  pincode: string;

  @Default(0) //sets default value 0
  @Column
  recordStatus: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => order)
  product: order[];
}
export default customer;
