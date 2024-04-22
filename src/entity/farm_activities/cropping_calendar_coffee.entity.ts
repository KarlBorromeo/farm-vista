import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class CropingCalendarCoffee{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({length:60})
    january: string

    @Column({length:60})
    february: string

    @Column({length:60})
    march: string

    @Column({length:60})
    april: string

    @Column({length:60})
    may: string

    @Column({length:60})
    june: string

    @Column({length:60})
    july: string

    @Column({length:60})
    august: string

    @Column({length:60})
    september: string

    @Column({length:60})
    october: string

    @Column({length:60})
    november: string

    @Column({length:60})
    december: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}