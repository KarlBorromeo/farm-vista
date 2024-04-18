import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class FarmWasteManagement{

    @PrimaryGeneratedColumn()
    _id: number

    @Column({length:30})
    crops_grown: string

    @Column({length:30})
    kind_waste_produced:string

    @Column({default: 0})
    volume_waste_kg: number

    @Column({default: 0})
    volume_waste_liter: number

    @Column({default: 0})
    volume_waste_sludge: number

    @Column({length:3})
    is_utilized: string

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}