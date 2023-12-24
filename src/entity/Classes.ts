import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Classes {
    @PrimaryColumn({type:'varchar',length:10})
    cname:string;
}