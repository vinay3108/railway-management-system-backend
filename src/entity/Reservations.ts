// Import necessary modules from TypeORM
import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne, JoinColumn } from 'typeorm';

// Define the entity class
@Entity()
@Index('UNIQUE', ['id', 'train_no', 'date_of_journey', 'status'], { unique: true })
@Index('FK_TN_DOJ_C', ['train_no', 'date_of_journey', 'class'])
@Index('class', ['class'])
export class Reservations {
  @PrimaryGeneratedColumn()
  pnr: number;

  @Column({ type: 'int' })
  id: number;

  @Column({ type: 'int' })
  train_no: number;

  @Column({ type: 'date' })
  date_of_journey: Date;

  @Column({ type: 'int' })
  train_fare: number;

  @Column({ type: 'varchar', length: 50 })
  class: string;

  @Column({ type: 'int' })
  no_of_seat: number;

  @Column({ type: 'varchar', length: 50 })
  status: string;

  // Define relationships or additional columns as needed
  // Example:
  // @ManyToOne(type => AnotherEntity, { cascade: true })
  // @JoinColumn({ name: 'anotherEntityId' })
  // anotherEntity: AnotherEntity;
}
