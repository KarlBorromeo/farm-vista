import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class DetailsCoffeeArea{

    @PrimaryGeneratedColumn()
    _id: number

    /* Note: json format must be : {
        details: string,
        reason_using: string
    } */

    @Column({type:'json'})
    classification_crops: JSON

    @Column({type:'json'})
    year_planted: JSON

    @Column({type:'json'})
    planting_distance: JSON

    @Column({type:'json'})
    number_plants_stands: JSON

    @Column({type:'json'})
    intercrop_variety: JSON

    @Column({type:'json'})
    total_area: JSON
    
    @Column({type:'json'})
    seed_source: JSON

    @OneToOne(()=>Profile,{onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}