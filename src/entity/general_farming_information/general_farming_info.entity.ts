import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class GeneralFarmingInfo{

    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    avgyrs_general_farming: number

    @Column()
    avgyrs_ctr_farming: number

    @Column({length:3})
    is_there_time_stopped_farming: string

    @Column({nullable: true})
    year_stopped_farming: number | null

    @Column({nullable: true})
    year_resumed_farming: number | null

    @Column({type:'text',nullable: true})
    reason_stopping: string

    @OneToOne(()=>Profile,{onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}