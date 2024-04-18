import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class CoffeeHarvestingMarketing{

    @PrimaryGeneratedColumn()
    _id: number

    /* Note: json format must be : {
        variable: any,
        remarks: any
    } */

    @Column({type:'json'})
    cost_product_sorting_classification: JSON

    @Column({type:'json'})
    qty_coffee_cherries_harvested: JSON

    @Column({type:'json'})
    qty_sold_dried_green_cofee: JSON

    @Column({type:'json'})
    qty_unsold_defect: JSON

    @Column({type:'json'})
    price_received: JSON

    @Column({type:'json'})
    total_sale: JSON

    @Column({type:'json'})
    qty_stored_human_consumption: JSON

    @Column({type:'json'})
    qty_given_to_other: JSON

    @Column({type:'json'})
    marketing_outlet: JSON

    @Column({type:'json'})
    market_quality_preference: JSON

    @Column({type:'json'})
    how_bring_to_marketing_outlet: JSON

    @Column({type:'json'})
    cost_transport_qty_sold: JSON

    @Column({type:'json'})
    total_receipts_received: JSON

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}