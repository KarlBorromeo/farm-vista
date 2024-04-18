import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class InfrastructuralDistanceAccesibility{

    @PrimaryGeneratedColumn()
    _id: number

    /* Note: json format must be : {
        distance_qty: number,
        distance_unit: string,
        dominant_transportation: string,
        dominant_type_road: string
    } */
    @Column({type: 'json'})
    farm_to_nearest_road: JSON

    @Column({type: 'json'})
    farm_to_residence: JSON

    @Column({type: 'json'})
    farm_to_output_market: JSON

    @Column({type: 'json'})
    residence_to_output_market: JSON

    @Column({type: 'json'})
    farm_to_inputs_supply: JSON

    @Column({type: 'json'})
    residence_to_inputs_supply: JSON

    @OneToOne(()=>Profile,{onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}