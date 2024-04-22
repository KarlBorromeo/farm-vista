import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class OpenEndedQuestionsRatings{

    @PrimaryGeneratedColumn()
    _id: number
    /* Note: json format must be : 
    for awareness column: {
        awareness_1st: number,
        awareness_2nd: number,
        awareness_3rd: number,
        awareness_4th: number,
        awareness_5th: number,
        awareness_6th: number,
        awareness_7th: number,
        awareness_8th: number
    }
    for knowledge column: {
        knowledge_1st: number,
        knowledge_2nd: number,
        knowledge_3rd: number,
        knowledge_4th: number,
        knowledge_5th: number,
        knowledge_6th: number,
        knowledge_7th: number,
        knowledge_8th: number,
        knowledge_9th: number,
        knowledge_10th: number
    }
    for attitude column: {
        attitude_1st: number,
        attitude_2nd: number,
        attitude_3rd: number,
        attitude_4th: number,
        attitude_5th: number,
        attitude_6th: number,
        attitude_7th: number,
        attitude_8th: number,
        attitude_9th: number,
        attitude_10th: number
    }
    for practices column: {
        practices_1st: number,
        practices_2nd: number,
        practices_3rd: number,
        practices_4th: number,
        practices_5th: number,
        practices_6th: number,
        practices_7th: number,
        practices_8th: number,
        practices_9th: number,
        practices_10th: number
    }
    
    */
    @Column({type:'json'})
    awareness: JSON

    @Column({type:'json'})
    knowledge: JSON

    @Column({type:'json'})
    attitutde: JSON

    @Column({type:'json'})
    practices: JSON

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}