import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { FarmHouseholdAssets } from "./farm_household_assets.entity";
import { ColdObservable } from "rxjs/internal/testing/ColdObservable";

@Entity()
export class FarmTools{

    @PrimaryGeneratedColumn()
    farmtool_id: number

    @Column({length:30})
    farmtool_name: string

    @Column()
    farmtool_quantity: number

    @Column({length:3})
    is_acquired_govt_program: string

    @Column()
    farmtool_age: number

    @ManyToOne(()=>FarmHouseholdAssets,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'items_farms_asset_id'})
    farm_household_aseets: FarmHouseholdAssets

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}