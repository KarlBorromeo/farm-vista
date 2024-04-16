import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class DetailsDwellingPlace{

    @PrimaryGeneratedColumn()
    detail_dwelling_place_id: number

    @Column()
    house_ownerhsip: string

    @Column()
    number_of_rooms: number

    @Column()
    roof_materials_made: string

    @Column()
    walls_materials_made: string

    @Column()
    kind_toilet_facilty: string
    
    @Column()
    kind_lighting_facility: string

    @Column()
    source_cooking_fuel: string

    @Column()
    source_drinking_supply: string

    @ManyToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}