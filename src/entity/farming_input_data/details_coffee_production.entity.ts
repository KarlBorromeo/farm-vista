import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class DetailsCoffeeProduction{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({type: 'date'})
    start_planting: Date

    @Column({type: 'text'})
    source_planting_material: string

    @Column({type: 'text'})
    coffee_variety_used: string

    @Column({type: 'text'})
    method_land_preparation: string

    @Column({length: 15})
    row_orientation: string
    
    @Column()
    planting_depth: number
    
    @Column({length:20,nullable: true})
    soil_type: string
    
    @Column({type: 'text'})
    weed_control: string
    
    @Column({type: 'text'})
    insect_pest_management: string
    
    @Column({type: 'text'})
    disease_management: string
    
    @Column({length: 3})
    is_use_inorganic_fertilizer: string

    @Column({type:'text',nullable: true})
    specify_inorganic_fertilizer: string

    @Column({type: 'text',nullable: true})
    method_inorganic_application: string

    @Column({length: 3})
    is_use_organic_fertilizer: string

    @Column({type:'text',nullable:true})
    specify_organic_fertilizer:string

    @Column({type:'text',nullable:true})
    method_organic_application: string

    @Column({length:3})
    is_practice_green_manuring: string

    @Column({length:3})
    is_return_crop_residue: string

    @Column({type:'date'})
    date_harvesting: Date

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}