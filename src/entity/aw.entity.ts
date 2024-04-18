import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Aw{
    @PrimaryColumn()
    aw:number

    @Column()
    ahah:string
}