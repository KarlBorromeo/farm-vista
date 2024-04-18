import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class PestManagementPractices{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({length: 3})
    did_use_pesticide: string

    @Column({length: 30, nullable: true})
    type_of_pesticide: string

    @Column({length: 50, nullable: true})
    whom_idea_apply_pesticide: string

    @Column({nullable: true, default: 0})
    times_applied_pesticide: number

    @Column({nullable: true, length: 3})
    did_spray_yourself: string

    @Column({nullable:true})
    pay_labor_spraying: number

    @Column({length: 3})
    have_sprayer: string

    @Column({nullable:true,type:'text'})
    kind_sprayer_have: string

    @Column({nullable:true, type:'text'})
    how_get_sprayer: string

    @Column({type:'text'})
    hear_about_pesticide_used: false

    @Column({type:'text'})
    important_consideration_deciding_pesticide: string

    @Column({type: 'text'})
    whom_pest_control_advice: string

    @Column({nullable: true, type: 'text'})
    which_advice_credible: string

    @Column({type:'text'})
    why: string

    @Column({length: 3})
    attended_training_pest_management: string

    @Column({nullable: true, type:'text'})
    training_about:string

    @Column({nullable:true, type:'text'})
    who_organized_training: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}