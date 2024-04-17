import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, OneToMany } from "typeorm";
import { Users } from "./users.entity";

@Entity()
export class Roles{
    @PrimaryGeneratedColumn()
    role_id:string;

    @Column({unique:true,length:50})
    role_type:string

    @OneToMany(()=>Users,(users)=>users.role)
    users:Users[]

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}