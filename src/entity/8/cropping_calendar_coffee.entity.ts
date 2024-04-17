import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class CropingCalendarCoffee{

    @PrimaryGeneratedColumn()
    cropping_calendar_coffee_id: number

    @Column({type: 'text'})
    january: string

    @Column({type: 'text'})
    february: string

    @Column({type: 'text'})
    march: string

    @Column({type: 'text'})
    april: string

    @Column({type: 'text'})
    may: string

    @Column({type: 'text'})
    june: string

    @Column({type: 'text'})
    july: string

    @Column({type: 'text'})
    august: string

    @Column({type: 'text'})
    september: string

    @Column({type: 'text'})
    october: string

    @Column({type: 'text'})
    november: string

    @Column({type: 'text'})
    december: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}