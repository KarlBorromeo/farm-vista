import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class FarmActivities{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({type: 'text'})
    agricultural_system: string

    @Column({length:3})
    know_proper_reutilization_agriwaste: string

    @Column({type: 'text',nullable: true})
    where_disposed_unutilized_agriwaste:string

    @Column({type: 'text'})
    where_hear_about_reutilization:string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}