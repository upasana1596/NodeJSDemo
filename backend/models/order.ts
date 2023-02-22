import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,ForeignKey,DataType,HasMany} from 'sequelize-typescript';
import Customer from './customer';
import Product from './product';

@Table
class Order extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column(DataType.DECIMAL)
  unitPrice: number;

  @Column
  unitQty: number;

  @Column(DataType.DECIMAL)
  totalamount : number;
  
  @Column(DataType.DECIMAL)
  discount : number;

  @Column(DataType.DECIMAL)
  finalamount : number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @ForeignKey(() => Product)
  @Column
  productId: number;

  @ForeignKey(() => Customer)
  @Column
  customerId: number;
}
export default Order