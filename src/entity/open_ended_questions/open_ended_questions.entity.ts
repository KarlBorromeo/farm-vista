import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class OpenEndedQuestions{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({type:'text'})
    good_agricultural_practice_used_coffee:string

    @Column({type:'text'})
    challenges_encountered_coffee:string

    @Column({type:'text'})
    proposed_intervention_coffee:string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}