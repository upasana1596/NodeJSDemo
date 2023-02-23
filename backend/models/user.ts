import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  Default,
} from "sequelize-typescript";
import role from "./role";

@Table
class user extends Model {
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

  @ForeignKey(() => role)
  @Column
  roleId: number;

  @Default(0) //sets default value 0
  @Column
  recordStatus: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @BelongsTo(() => role)
  role: role;
}
export default user;
