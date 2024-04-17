import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class InformationKnowledgeSources{

    @PrimaryGeneratedColumn()
    information_knowledge_source_id: number

    @Column({length:3})
    have_functional_radio: string
    
    @Column({type:'text',nullable:true})
    radio_station_usually_tune: string
    
    @Column({length:10,nullable:true})
    time_listening_radio: string
    
    @Column({type:'text',nullable:true})
    radio_programs_listens: string
    
    @Column({type:'text',nullable:true})
    print_materials_read: string
    
    @Column({length:3})
    have_television: string
    
    @Column({type:'text',nullable:true})
    tv_station_watches: string
    
    @Column({length:10,nullable:true})
    time_watching_tv: string
    
    @Column({length:3})
    have_socmed_account: string
    
    @Column({length:15})
    how_often_used_socmed: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}