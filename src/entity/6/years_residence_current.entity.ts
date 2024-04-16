import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class YearCurrentResidence{

    @PrimaryGeneratedColumn()
    year_current_reside_id: number

    @Column()
    number_year: number

    @OneToOne(()=>Profile,{onDelete: 'CASCADE',nullable: false})
    @JoinColumn({name:'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}