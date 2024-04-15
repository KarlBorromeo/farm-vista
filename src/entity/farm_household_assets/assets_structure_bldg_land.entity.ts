import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { FarmHouseholdAssets } from "./farm_household_assets.entity";

@Entity()
export class StructureBldgLand{

    @PrimaryGeneratedColumn()
    structure_bldg_land_id: number

    @Column()
    structure_bldg_land_name: string

    @Column()
    structure_bldg_land_quantity: number

    @Column()
    is_acquired_govt_program: string

    @Column()
    structure_bldg_land_age: number

    @ManyToOne(()=>FarmHouseholdAssets)
    @JoinColumn({name:'items_farms_asset_id'})
    farm_household_aseets: FarmHouseholdAssets

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}