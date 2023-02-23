import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  AutoIncrement,
  PrimaryKey,
  HasMany,
  Default
} from "sequelize-typescript";
import user from "./user";

@Table
class role extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;
  
  @Default(0) //sets default value 0
  @Column
  recordStatus: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @HasMany(() => user)
  user: user[];
}
export default role;
