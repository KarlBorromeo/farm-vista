import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { FarmHouseholdAssets } from "./farm_household_assets.entity";

@Entity()
export class FarmMachinery{

    @PrimaryGeneratedColumn()
    farm_machinery_id: number

    @Column()
    farm_machinery_name: string

    @Column()
    farm_machinery_quantity: number

    @Column()
    is_acquired_govt_program: string

    @Column()
    farm_machinery_age: number

    @ManyToOne(()=>FarmHouseholdAssets,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'items_farms_asset_id'})
    farm_household_aseets: FarmHouseholdAssets

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}