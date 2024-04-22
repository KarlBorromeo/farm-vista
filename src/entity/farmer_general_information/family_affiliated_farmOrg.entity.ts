import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

/* refers to the 2.9 in the Baseline Survey Forms*/
@Entity()
export class FamilyAffiliatedFarmOrg{
    @PrimaryGeneratedColumn()
    _id:number

    @Column({length:50})
    fullname: string

    @Column({length:25})
    position: string

    @Column({type:'text'})
    name_organization: string

    @Column({length:20})
    type_organization: string

    @Column()
    years_as_member: number

    @Column({length:25})
    status_membership: string

    @Column({length:25})
    status_organization: string

    @ManyToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}