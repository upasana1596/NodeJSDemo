import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,BelongsToMany} from 'sequelize-typescript';
import Order from './order';
import Product from './product';

@Table
class Customer extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  mobileNo: number;

  @Column
  city: string;

  @Column
  address: string;

  @Column
  pincode: string;
  
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsToMany(() => Product, () => Order)
  customer: Product[];
}
export default Customer