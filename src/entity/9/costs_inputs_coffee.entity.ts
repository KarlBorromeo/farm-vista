import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class CostsInputsCoffee{

    @PrimaryGeneratedColumn()
    _id: number

    /* Note: json format must be : {
        price: 0,
        quantity: 0,
        total_transport_cost: 0,
        total_cost: 0,
        cash_creadit: 'cash'|'credit',
        source_input_purchased: ''
    } */

    @Column({type:'json'})
    planting_materials: JSON

    @Column({type:'json'})
    fertilizer_urea: JSON

    @Column({type:'json'})
    fertilizer_complete: JSON

    @Column({type:'json'})
    fertilizer_ammosul: JSON
    
    @Column({type:'json'})
    fertilizer_ammophos: JSON
    
    @Column({type:'json'})
    fertilizer_solophos: JSON
    
    @Column({type:'json'})
    fertilizer_mop: JSON
    
    @Column({type:'json'})
    fertilizer_animal_manure: JSON
    
    @Column({type:'json'})
    fertilizer_othes: JSON
    
    @Column({type:'json'})
    lime: JSON
    
    @Column({type:'json'})
    insecticide: JSON
    
    @Column({type:'json'})
    herbicide: JSON
    
    @Column({type:'json'})
    fungicide: JSON
    
    @Column({type:'json'})
    others: JSON

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}