import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class InfrastructuralDistanceAccesibility{

    @PrimaryGeneratedColumn()
    distance_accesibility_id: number

    /* Note: json format must be : {
        distance_qty: number,
        distance_unit: string,
        dominant_transportation: string,
        dominant_type_road: string
    } */
    @Column({type: 'json'})
    farm_to_nearest_road: any

    @Column({type: 'json'})
    farm_to_residence: any

    @Column({type: 'json'})
    farm_to_output_market: any

    @Column({type: 'json'})
    residence_to_output_market: any

    @Column({type: 'json'})
    farm_to_inputs_supply: any

    @Column({type: 'json'})
    residence_to_inputs_supply: any

    @OneToOne(()=>Profile,{onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}