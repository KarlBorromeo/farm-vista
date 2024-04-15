import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Profile } from "./profile.entity";

/* refers to the 2.9 in the Baseline Survey Forms*/
@Entity()
export class FamilyAffiliatedFarmOrg{
    @PrimaryGeneratedColumn()
    family_member_id:number

    @Column()
    fullname: string

    @Column()
    position: string

    @Column()
    name_organization: string

    @Column()
    type_organization: string

    @Column()
    years_as_member: number

    @Column()
    status_membership: string

    @Column()
    status_organization: string

    @ManyToOne(()=>Profile)
    @JoinColumn({name:'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_At: Date
}