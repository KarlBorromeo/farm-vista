import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Roles } from "./roles.entity";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    _id:string;

    @Column({length:15})
    firstname: string;

    @Column({length:15})
    lastname: string;

    @Column({length:15})
    username: string;

    @Column({type:'text'})
    salt: string

    @Column({type:'text'})
    password: string

    @ManyToOne(()=>Roles,{nullable:false, onDelete: 'CASCADE'})
    @JoinColumn({name:'role_id'})
    role:Roles
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}