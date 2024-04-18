import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class ParcelInformation{

    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    parcel_number: number

    @Column()
    area: number

    @Column({length: 50})
    tenure: string

    @Column({length:50})
    topography: string

    @Column({length:20})
    soil_fertility: string

    @Column({length:40})
    cropping_system: string

    @Column({length:30})
    source_of_water: string

    @Column({type:'text'})
    land_use_status: string

    @Column({type:'text'})
    crops_planted: string

    @ManyToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}