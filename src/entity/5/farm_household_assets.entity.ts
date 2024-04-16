import { Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from "typeorm";
import { FarmTools } from "./assets_farm_tools.entity";
import { FarmMachinery } from "./assets_farm_machinery.entity";
import { PoultryLivestock } from "./assets_poultry_livestock.entity";
import { StructureBldgLand } from "./assets_structure_bldg_land.entity";
import { Profile } from "../1/profile.entity";
@Entity()
export class FarmHouseholdAssets{

    @PrimaryGeneratedColumn()
    items_farms_asset_id: number

    @OneToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile_id: Profile

    @OneToMany(()=>FarmTools, (farmtools) => farmtools.farm_household_aseets)
    farm_tools: FarmTools

    @OneToMany(()=>FarmMachinery, (farmmachinery) => farmmachinery.farm_household_aseets,{cascade: ['remove', 'update']})
    farm_machinery: FarmMachinery

    @OneToMany(()=>PoultryLivestock, (poultryLivestock) => poultryLivestock.farm_household_assets,{cascade: ['remove', 'update']})
    poultry_livestock: PoultryLivestock

    @OneToMany(()=>StructureBldgLand, (structureBldgLand) => structureBldgLand.farm_household_aseets,{cascade: ['remove', 'update']})
    structure_bldg_land: StructureBldgLand

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date

}