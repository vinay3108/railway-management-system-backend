// Import necessary modules from TypeORM
import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

// Define the entity class
@Entity()
@Index('train_starting_place_index', ['starting_place'])
@Index('train_departure_place_index', ['departure_place'])
export class Trains {
  @PrimaryGeneratedColumn()
  train_no: number;

  @Column({ type: 'varchar', length: 50 })
  ttrain_name: string;

  @Column({ type: 'varchar', length: 50 })
  starting_place: string;

  @Column({ type: 'time' })
  starting_time: string;

  @Column({ type: 'varchar', length: 50 })
  departure_place: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  departure_day: string | null;

  @Column({ type: 'time' })
  departure_time: string;

  // Additional columns can be added as needed
  // Example:
  // @Column({ type: 'datatype' })
  // columnName: datatype;
}
