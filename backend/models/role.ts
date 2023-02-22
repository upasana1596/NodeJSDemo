import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,HasMany} from 'sequelize-typescript';
import User from './user';

@Table
class Role extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  
  @Column
  name: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => User)
  user: User[];
}
export default Role