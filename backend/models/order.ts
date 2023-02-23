import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  ForeignKey,
  DataType,
  HasMany,
  BelongsTo,
} from "sequelize-typescript";
import customer from "./customer";
import product from "./product";

@Table
class order extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.DECIMAL)
  unitPrice: number;

  @Column
  unitQty: number;

  @Column(DataType.DECIMAL)
  totalamount: number;

  @Column(DataType.DECIMAL)
  discount: number;

  @Column(DataType.DECIMAL)
  finalamount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => product)
  @Column
  productId: number;

  @ForeignKey(() => customer)
  @Column
  customerId: number;

  @BelongsTo(() => product)
  product: product;

  @BelongsTo(() => customer)
  customer: customer;
}
export default order;
