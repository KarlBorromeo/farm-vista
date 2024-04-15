import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    username: string;

    @Column()
    salt: string

    @Column()
    password: string

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}