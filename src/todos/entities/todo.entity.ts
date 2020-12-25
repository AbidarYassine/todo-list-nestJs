import { BaseEntity, Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, Table } from "typeorm";


@Entity()
export class TodoEntity extends BaseEntity {
   

    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:String;
    @Column()
    completed:boolean;


}
