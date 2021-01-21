import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    proposer:string

    @Column()
    userphone:string

    @Column()
    userid:string;

    @Column()
    quantity:string;

    @Column()
    money:string;

    @Column()
    projectName:string

    @Column()
    unitSite:string

    @Column()
    unitName:string

    @Column()
    groupLeader:string

    @Column()
    address:string

    @Column()
    creat_time:Date

}
