import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FamilyAffiliatedFarmOrg } from 'src/entity/family_affiliated_farmOrg.entity';
import { FamilySourceIncome } from 'src/entity/family_source_income.entity';
import { FarmMachinery } from 'src/entity/farm_household_assets/assets_farm_machinery.entity';
import { FarmTools } from 'src/entity/farm_household_assets/assets_farm_tools.entity';
import { PoultryLivestock } from 'src/entity/farm_household_assets/assets_poultry_livestock.entity';
import { StructureBldgLand } from 'src/entity/farm_household_assets/assets_structure_bldg_land.entity';
import { FarmHouseholdAssets } from 'src/entity/farm_household_assets/farm_household_assets.entity';
import { HouseholdExpenses } from 'src/entity/household_expenses.entity';
import { Profile } from 'src/entity/profile.entity';
import { ProfileGeneralInfo } from 'src/entity/profile_general_info.entity';
import { SourcesFarmIncome } from 'src/entity/sources_farm_income.entity';
import { Users } from 'src/entity/users.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3309,
            username: 'postgres',
            password: 'qwert',      // work: qwert , home: jklborromeo
            database: 'farmvista',
            entities: [Users,
                Profile,
                ProfileGeneralInfo,
                FamilyAffiliatedFarmOrg,
                FamilySourceIncome,
                SourcesFarmIncome,
                HouseholdExpenses,
                FarmHouseholdAssets,
                    FarmTools,
                    FarmMachinery,
                    PoultryLivestock,
                    StructureBldgLand
            ],
            synchronize: true
         })
    ],
})
export class DatabaseModule {}