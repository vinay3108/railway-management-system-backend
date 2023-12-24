import { Entity,PrimaryColumn } from "typeorm";

@Entity()
export class Stations {
    @PrimaryColumn({type:'varchar',length:50})
    station_name:string;
}