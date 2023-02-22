import { Table, Column, Model, CreatedAt, UpdatedAt,AutoIncrement,PrimaryKey,BelongsTo,ForeignKey} from 'sequelize-typescript';
import Role from './role';

@Table
class User extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;
  
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  createdBy: number;

  @ForeignKey(() => Role)
  @Column
  roleId: number;
  
  @Column
  updatedBy: number;
  
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
  
  @BelongsTo(() => Role)
  user: Role;
}
export default User