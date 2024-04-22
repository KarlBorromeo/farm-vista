import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Profile } from "../farmer_basic_information/profile.entity";

@Entity()
export class HouseholdExpenses{

    @PrimaryGeneratedColumn()
    _id: number

    @Column()
    food: number

    @Column()
    clothing: number

    @Column()
    utilities: number

    @Column()
    household: number

    @Column()
    non_food_items: number

    @Column()
    health_expenses: number

    @Column()
    transportation: number

    @Column()
    communication: number

    @Column()
    recreation: number

    @Column()
    education: number

    @Column()
    special_occasions: number

    @Column({ nullable: true })
    other_specified: string

    @Column( {default: 0, nullable: true })
    others: number

    @OneToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}