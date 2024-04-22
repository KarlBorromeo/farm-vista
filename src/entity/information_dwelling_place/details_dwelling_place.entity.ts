import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class DetailsDwellingPlace{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({length:30})
    house_ownerhsip: string

    @Column()
    number_of_rooms: number

    @Column({type:'text'})
    roof_materials_made: string

    @Column({type:'text'})
    walls_materials_made: string

    @Column({length:100})
    kind_toilet_facilty: string
    
    @Column({length:30})
    kind_lighting_facility: string

    @Column({length:30})
    source_cooking_fuel: string

    @Column({length:40})
    source_drinking_supply: string

    @ManyToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}