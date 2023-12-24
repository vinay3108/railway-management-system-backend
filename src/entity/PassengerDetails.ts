import { Entity,PrimaryColumn,Column, Index } from "typeorm";

@Entity()
@Index('passenger_detail_pnr_p_name_p_age_p_gender_index',['pnr','passenger_name','passenger_age','passenger_gender'],{unique:true})
export class PassengerDetails{
    @PrimaryColumn({type:'int'})
    pnr:number
    
    @Column({type:'varchar',length:50})
    passenger_name:string

    @Column({type:'int'})
    passenger_age:number

    @Column({type:'varchar',length:50})
    passenger_gender:string
}