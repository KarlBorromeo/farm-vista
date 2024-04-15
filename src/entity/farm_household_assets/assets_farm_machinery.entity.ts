import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { FarmHouseholdAssets } from "./farm_household_assets.entity";

@Entity()
export class FarmMachinery{

    @PrimaryGeneratedColumn()
    farmMachinery_id: number

    farmMachinery_name: string
    farmMachinery_quantity: number
    is_acquired_govt_program: string
    farmMachinery_age: number

    @ManyToOne(()=>FarmHouseholdAssets)
    @JoinColumn({name:'items_farms_asset_id'})
    farm_household_aseets: FarmHouseholdAssets

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_At: Date
}