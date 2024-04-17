import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class FarmWasteManagement{

    @PrimaryGeneratedColumn()
    farm_waste_management_id: number

    @Column()
    crops_grown: string

    @Column({type: 'text'})
    kind_waste_produced:string

    @Column({default: 0})
    volume_waste_kg: number

    @Column({default: 0})
    volume_waste_liter: number

    @Column({default: 0})
    volume_waste_sludge: number

    @Column()
    is_utilized: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}