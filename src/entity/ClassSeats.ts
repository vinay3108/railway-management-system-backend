import { Entity,PrimaryColumn,Column,Index } from "typeorm";

@Entity()
@Index('classseats_train_no_date_of_journey_class_index', ['train_no', 'date_of_journey', 'class'], { unique: true })
@Index('classseats_class_index', ['class'])

export class ClassSeats {
    @PrimaryColumn({type:'int'})
    train_no:number
    
    @Column()
    date_of_journey:Date

    @Column({type:'varchar',length: 50})
    class:Date

    @Column({type:'int'})
    fare:number

    @Column({type:'int'})
    seats_left:number
}