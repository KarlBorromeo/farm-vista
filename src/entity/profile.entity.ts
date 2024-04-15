import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne , } from "typeorm";
import { FamilyAffiliatedFarmOrg } from "./family_affiliated_farmOrg.entity";
import { FamilySourceIncome } from "./family_source_income.entity";
import { SourcesFarmIncome } from "./sources_farm_income.entity";
import { HouseholdExpenses } from "./household_expenses.entity";
import { FarmHouseholdAssets } from "./farm_household_assets/farm_household_assets.entity";
import { ProfileGeneralInfo } from "./profile_general_info.entity";
/* refers to the 1 in the Baseline Survey Forms*/
@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    profile_id:number

    @Column()
    lastname: string

    @Column()
    firstname: string

    @Column()
    middle_initial: string

    @Column()
    contact_number: string

    @Column({ nullable: true })
    farmer_code: string | null

    // II. GENERAL INFORMATION
    @OneToOne(()=>ProfileGeneralInfo,{cascade: ['remove', 'update']})
    general_info: ProfileGeneralInfo

    // 2.9 Any household member affiliated to any farming organization/association
    @OneToMany(()=>FamilyAffiliatedFarmOrg,(family_affiliated_farmOrg) => family_affiliated_farmOrg.profile,{cascade: ['remove', 'update']})
    family_affiliated_farmOrg: FamilyAffiliatedFarmOrg[]

    // 3 Household member information and source of income (including farmer)
    @OneToMany(()=> FamilySourceIncome,(family_source_income)=> family_source_income.profile,{cascade: ['remove', 'update']})
    family_source_income: FamilySourceIncome[]

    // (3.1) Sources of Farm Income
    @OneToOne(()=> SourcesFarmIncome,{cascade: ['remove', 'update']})
    source_farmincome: SourcesFarmIncome

    // (4) Household expenses
    @OneToOne(()=> HouseholdExpenses,{cascade: ['remove', 'update']})
    household_expenses: HouseholdExpenses

    // (5) Farm and Household assets
    @OneToOne(()=> FarmHouseholdAssets,{cascade: ['remove', 'update']})
    farmHousehold_assets: FarmHouseholdAssets


    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}