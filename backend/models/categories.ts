import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,HasMany} from 'sequelize-typescript';
import Product from './product';

@Table
class Category extends Model {
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

  @HasMany(() => Product)
  product: Product[];
}
export default Category