import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class ProfileGeneralInfo{

    @PrimaryGeneratedColumn()
    general_info_id: number

    @Column()
    age: number

    @Column({length:7})
    sex: string

    @Column({length:25})
    civil_status: string

    @Column({length:25})
    religion: string

    @Column({length:100})
    highest_education_attained: string

    @Column({length:3})
    is_belong_marginalized_sector: string

    @Column({type:'text',nullable: true })
    marginalized_sector_name: string | null

    @Column({length:20})
    dialect_spoken: string

    @Column({length:3})
    is_member_farmer_orgranization: string

    @Column({length:30, nullable: true })
    organization_type_membership: string

    @Column({length:40, nullable: true })
    organization_name: string | null

    @OneToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}