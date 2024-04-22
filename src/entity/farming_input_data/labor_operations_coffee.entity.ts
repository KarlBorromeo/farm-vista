import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class LaborOperationCoffee{

    @PrimaryGeneratedColumn()
    _id: number

    /* Note: json format must be : {
        manDay_FL: 0,
        manDay_HL: 0,
        manDat_BL: 0,
        manAnimalDay_FL: 0,
        manAnimalDay_HL: 0,
        manAnimalDay_BL: 0,
        animalRented: '',
        animalRentedAmnt: 0,
        machineRented: '',
        machineRentedAmnt: 0,
        manHiredQty: 0,
        manHiredTotalSalary: 0,
        remarks: string
    } */

    @Column({type: 'json'})
    nursery_preparation: JSON

    @Column({type: 'json'})
    land_preparation: JSON
    
    @Column({type: 'json'})
    selection_planting_material: JSON
    
    @Column({type: 'json'})
    planting_transplanting: JSON
    
    @Column({type: 'json'})
    fertilizer_application: JSON
    
    @Column({type: 'json'})
    replanting: JSON
    
    @Column({type: 'json'})
    water_management: JSON
    
    @Column({type: 'json'})
    pest_diseases_management: JSON
    
    @Column({type: 'json'})
    harvesting: JSON
    
    @Column({type: 'json'})
    post_harvest_drying: JSON
    
    @Column({type: 'json'})
    post_harvest_hulling_polishing: JSON
    
    @Column({type: 'json'})
    post_harvest_sorting: JSON
    
    @Column({type: 'json'})
    post_harvest_packaging: JSON
    
    @Column({type: 'json'})
    post_harvest_storage: JSON
    
    @Column({type: 'json'})
    pruning: JSON
    
    @Column({type: 'json'})
    full_stumping: JSON
    
    @Column({type: 'json'})
    other_management: JSON

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}