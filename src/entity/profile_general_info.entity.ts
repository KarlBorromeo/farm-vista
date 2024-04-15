import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "./profile.entity";

@Entity()
export class ProfileGeneralInfo{

    @PrimaryGeneratedColumn()
    general_info_id: number

    @Column()
    age: number

    @Column()
    sex: string

    @Column()
    civil_status: string

    @Column()
    religion: string

    @Column()
    highest_education_attained: string

    @Column()
    is_belong_marginalized_sector: string

    @Column({ nullable: true })
    marginalized_sector_name: string | null

    @Column()
    dialect_spoken: string

    @Column()
    is_member_farmer_orgranization: string

    @Column({ nullable: true })
    organization_type_membership: string

    @Column({ nullable: true })
    organization_name: string | null

    @OneToOne(()=>Profile)
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_At: Date
}