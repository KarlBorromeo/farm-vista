import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class SourcesFarmIncome{

    @PrimaryGeneratedColumn()
    income_id:number

    @Column()
    coffee: number

    @Column()
    crops: number

    @Column()
    livestock: number

    @Column()
    agroforestry: number

    @Column()
    other_livelihodd: number

    @Column()
    off_farm: number

    @Column()
    non_farm: number

    @Column()
    other_source: number

    @OneToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}