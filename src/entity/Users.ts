// Import necessary modules from TypeORM
import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

// Define the entity class
@Entity()
@Unique(['mobile_no'])
@Unique(['email_id'])
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  email_id: string;

  @Column({ type: 'varchar', length: 10 })
  mobile_no: string;

  @Column({ type: 'date' })
  dob: Date;

  // Additional columns can be added as needed
  // Example:
  // @Column({ type: 'datatype' })
  // columnName: datatype;
}
