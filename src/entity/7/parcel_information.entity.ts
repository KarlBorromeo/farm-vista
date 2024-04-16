import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class ParcelInformation{

    @PrimaryGeneratedColumn()
    parcel_information_id: number

    @Column()
    parcel_number: number

    @Column()
    area: number

    @Column()
    tenure: string

    @Column()
    topography: string

    @Column()
    soil_fertility: string

    @Column()
    cropping_system: string

    @Column()
    source_of_water: string

    @Column()
    land_use_status: string

    @Column()
    crops_planted: string

    @ManyToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}