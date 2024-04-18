import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class DetailsCoffeeArea{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({type:'text'})
    classification_crops: string

    @Column()
    year_planted: number

    @Column()
    planting_distance: number

    @Column()
    number_plants_stands: number

    @Column({type:'text'})
    intercrop_variety: string

    @Column()
    total_area: number
    
    @Column({type:'text'})
    seed_source: string

    @OneToOne(()=>Profile,{onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}