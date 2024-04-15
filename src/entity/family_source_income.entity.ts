import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class FamilySourceIncome{
    @PrimaryGeneratedColumn()
    family_member_id:number

    @Column()
    fullname:string

    @Column()
    age: number

    @Column()
    sex: string

    @Column()
    role_in_family:string

    @Column()
    education_attainment: string

    @Column()
    estimated_contribution: number

    @Column()
    is_involved_cofeeFarm: string

    @ManyToOne(()=>Profile)
    @JoinColumn({name:'profile_id'})
    profile: Profile
    
    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date

}