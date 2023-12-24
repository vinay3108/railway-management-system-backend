import { Entity,PrimaryColumn,Column } from "typeorm";
@Entity()
export class CancelTickets {
    @PrimaryColumn({type:'int'})
    pnr:number

    @Column({type:'int',default:0})
    return_fare:number
}