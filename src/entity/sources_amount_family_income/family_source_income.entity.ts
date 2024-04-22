import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class FamilySourceIncome{
    @PrimaryGeneratedColumn()
    _id:number

    @Column({length:50})
    fullname:string

    @Column()
    age: number

    @Column({length:7})
    sex: string

    @Column({length:15})
    role_in_family:string

    @Column({length:50})
    education_attainment: string

    @Column()
    estimated_contribution: number

    @Column({length:3})
    is_involved_cofeeFarm: string

    @ManyToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'profile_id'})
    profile: Profile
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date

}