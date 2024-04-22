import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne , } from "typeorm";
import { FamilyAffiliatedFarmOrg } from "../farmer_general_information/family_affiliated_farmOrg.entity";
import { FamilySourceIncome } from "../sources_amount_family_income/family_source_income.entity";
import { SourcesFarmIncome } from "../sources_amount_family_income/sources_farm_income.entity";
import { HouseholdExpenses } from "../household_expenses/household_expenses.entity";
import { FarmHouseholdAssets } from "../farm_household_assets/farm_household_assets.entity";
import { ProfileGeneralInfo } from "../farmer_general_information/profile_general_info.entity";
import { YearCurrentResidence } from "../information_dwelling_place/years_residence_current.entity";
import { DetailsDwellingPlace } from "../information_dwelling_place/details_dwelling_place.entity";
import { GeneralFarmingInfo } from "../general_farming_information/general_farming_info.entity";
import { ParcelInformation } from "../general_farming_information/parcel_information.entity";
import { DetailsCoffeeArea } from "../general_farming_information/details_coffee_area.entity";
import { InfrastructuralDistanceAccesibility } from "../general_farming_information/infrastructural_distance_accessability.entity";
import { FarmActivities } from "../farm_activities/farm_activities.entity";
import { FarmWasteManagement } from "../farm_activities/farm_waste_management_all.entity";
import { CropingCalendarCoffee } from "../farm_activities/cropping_calendar_coffee.entity";
import { DetailsCoffeeProduction } from "../farming_input_data/details_coffee_production.entity";
import { LaborOperationCoffee } from "../farming_input_data/labor_operations_coffee.entity";
import { DetailsWagesOperation } from "../farming_input_data/details_wages_operation.entity";
import { CostsInputsCoffee } from "../farming_input_data/costs_inputs_coffee.entity";
import { PestDamageObserved } from "../pest_management_practices/pest_damage_observed.entity";
import { PestManagementPractices } from "../pest_management_practices/pest_management_practices.entity";
import { CoffeeHarvestingMarketing } from "../coffee_harvest_marketing/cofee_harvest_marketing.entity";
import { TechnologyAwareness } from "../technology_awareness_adoption/technology_awareness.entity";
import { TechnologyAwarenessAdoption } from "../technology_awareness_adoption/tech_awareness_adoption.entity";
import { InformationKnowledgeSources } from "../information_knowledge_sources/info_knowledge_source.entity";
import { OpenEndedQuestions } from "../open_ended_questions/open_ended_questions_entity";
import { OpenEndedQuestionsRatings } from "../open_ended_questions/open_ended_questions_rating_entity";

/* refers to the 1 in the Baseline Survey Forms*/
@Entity()
export class Profile{
    @PrimaryGeneratedColumn()
    _id:number

    @Column({length:20})
    lastname: string

    @Column({length:20})
    firstname: string

    @Column({length:2,nullable:true})
    middle_initial: string

    @Column({length:11})
    contact_number: string

    @Column({ nullable: true })
    farmer_code: string | null

    // II. GENERAL INFORMATION
    @OneToOne(()=>ProfileGeneralInfo)
    general_info: ProfileGeneralInfo

    // 2.9 Any household member affiliated to any farming organization/association
    @OneToMany(()=>FamilyAffiliatedFarmOrg,(family_affiliated_farmOrg) => family_affiliated_farmOrg.profile)
    family_affiliated_farmOrg: FamilyAffiliatedFarmOrg[]

    // 3 Household member information and source of income (including farmer)
    @OneToMany(()=> FamilySourceIncome,(family_source_income)=> family_source_income.profile)
    family_source_income: FamilySourceIncome[]

    // (3.1) Sources of Farm Income
    @OneToOne(()=> SourcesFarmIncome)
    source_farmincome: SourcesFarmIncome

    // (4) Household expenses
    @OneToOne(()=> HouseholdExpenses)
    household_expenses: HouseholdExpenses

    // (5) Farm and Household assets
    @OneToOne(()=> FarmHouseholdAssets)
    farm_household_assets: FarmHouseholdAssets

    // (6) How many years have you resided in your current residence
    @OneToOne(()=>YearCurrentResidence)
    year_current_residence: YearCurrentResidence

    // (6.1) Details on dwelling place
    @OneToMany(()=>DetailsDwellingPlace,(details_dwelling_place)=>details_dwelling_place.profile)
    details_dwelling_place: DetailsDwellingPlace[]

    // VII. GENERAL FARMING INFORMATION
    @OneToOne(()=>GeneralFarmingInfo)
    general_farming_info: GeneralFarmingInfo

    // (7.4) Parcel Information
    @OneToMany(()=>ParcelInformation,(parcelInfo)=>parcelInfo.profile)
    parcel_information: ParcelInformation[]

    // (7.5) Details on Coffee Area
    @OneToOne(()=>DetailsCoffeeArea)
    details_coffee_area: DetailsCoffeeArea

    // (7.6) Infrastructural Distance and Accessibility
    @OneToOne(()=>InfrastructuralDistanceAccesibility)
    infrastractural_distance_accessiblity: InfrastructuralDistanceAccesibility

    // VIII. FARM ACTIVITIES
    @OneToOne(()=>FarmActivities)
    farm_activies: FarmActivities

    // (8.4) Farm waste management and utilization of crops grown? (Tanan, dili coffee lang) Please specify
    @OneToMany(()=>FarmWasteManagement,(farmWasteMngmnt)=>farmWasteMngmnt.profile)
    farm_waste_management: FarmWasteManagement

    // (8.5) Cropping pattern and calendar for coffee (latest cropping): (see code 20)
    @OneToOne(()=> CropingCalendarCoffee)
    cropping_calendar_coffee: CropingCalendarCoffee

    // (9.1) Input Data 1. Details of coffee production in 2023 (see code 21)
    @OneToOne(()=>DetailsCoffeeProduction)
    details_coffee_production: DetailsCoffeeProduction

    // (9.2) Input Data 2. Labor Utilization in Farm Operations of Coffee (see code 22)
    @OneToOne(()=> LaborOperationCoffee)
    labor_operation_coffee: LaborOperationCoffee

    // (9.3) Input Data 3. Details of the wages for each operation
    @OneToOne(()=> DetailsWagesOperation)
    details_wages_operation: DetailsWagesOperation

    // (9.4) Input Data 4. Cost of Inputs for Coffee
    @OneToOne(()=> CostsInputsCoffee)
    costs_inputs_coffee: CostsInputsCoffee

    // (10) What pest(s) damage did you commonly observe in the last cropping seasons? (see code 23)
    @OneToMany(()=>PestDamageObserved,(pestDamageObserved)=>pestDamageObserved.profile)
    pest_damage_observed: PestDamageObserved[]

    // (10.1 - 10.9b) PEST MANAGEMENT PRACTICES
    @OneToOne(()=>PestManagementPractices)
    pest_management_practices: PestManagementPractices

    // XI. COFFEE HARVEST AND MARKETING
    @OneToOne(()=>CoffeeHarvestingMarketing)
    coffee_harvest_market: CoffeeHarvestingMarketing

    // XII. TECHNOLOGY AWARENESS AND ADOPTION, Have you heard about coffee farming technologies/ practices?
    @OneToOne(()=>TechnologyAwareness)
    techonology_awareness: TechnologyAwareness

    // XII. TECHNOLOGY AWARENESS AND ADOPTION
    @OneToOne(()=>TechnologyAwarenessAdoption)
    technology_awareness_adoption: TechnologyAwarenessAdoption

    // XIII. INFORMATION AND KNOWLEDGE SOURCES: COMMUNICATION VARIABLES
    @OneToOne(()=>InformationKnowledgeSources)
    info_knowledge_sources: InformationKnowledgeSources

    // XIV. Open ended Questions:
    @OneToOne(()=>OpenEndedQuestions)
    open_ended_questions: OpenEndedQuestions

    // XIV. Open ended Questions Ratings:
    @OneToOne(()=>OpenEndedQuestionsRatings)
    open_ended_question_ratings: OpenEndedQuestionsRatings

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}