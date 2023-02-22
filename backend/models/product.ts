import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,ForeignKey,BelongsTo,BelongsToMany} from 'sequelize-typescript';
import Category from './categories';
import Customer from './customer';
import Order from './order';

@Table
class Product extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsToMany(() => Customer, () => Order)
  customer: Customer[];
}
export default Product