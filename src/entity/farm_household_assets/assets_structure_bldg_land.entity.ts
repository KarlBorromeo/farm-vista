import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { FarmHouseholdAssets } from "./farm_household_assets.entity";

@Entity()
export class StructureBldgLand{

    @PrimaryGeneratedColumn()
    StructureBldLand_id: number

    StructureBldLand_name: string
    StructureBldLand_quantity: number
    is_acquired_govt_program: string
    StructureBldLand_age: number

    @ManyToOne(()=>FarmHouseholdAssets)
    @JoinColumn({name:'items_farms_asset_id'})
    farm_household_aseets: FarmHouseholdAssets

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_At: Date
}