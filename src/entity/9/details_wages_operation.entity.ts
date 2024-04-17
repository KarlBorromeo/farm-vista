import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class DetailsWagesOperation{

    @PrimaryGeneratedColumn()
    details_wages_operation_id: number

    @Column()
    amnt_paid_labor: number

    @Column()
    goods_provided_labor: number

    @Column()
    expected_wage_otherfarms: number

    @Column()
    amnt_paid_cattle_with_operator: number

    @Column()
    amnt_paid_cattle_only: number

    @Column()
    amnt_paid_manmachine: number

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}