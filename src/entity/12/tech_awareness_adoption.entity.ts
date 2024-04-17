import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn, Column, OneToOne, OneToMany } from "typeorm";
import { Profile } from "../1/profile.entity";

@Entity()
export class TechnologyAwarenessAdoption{

    @PrimaryGeneratedColumn()
    technology_awareness_adoption_id: number

    /* Note: json format must be : {
        is_heard: 'yes'|'no',
        souce_info: '',
        how_did_learn_tech_practices: '',
        year:  2000
    } */
    
    // Methods of Propagation
    @Column({type:'json'})
    methods_propagation_seed: JSON

    @Column({type:'json'})
    methods_propagation_grafting: JSON

    @Column({type:'json'})
    methods_propagation_cutting: JSON

    @Column({type:'json'})
    methods_propagation_tissue_culture: JSON

    // Coffee Cropping Pattern
    @Column({type:'json'})
    monoscropping: JSON

    @Column({type:'json'})
    multiple_croppping: JSON

    @Column({type:'json'})
    intercroppping: JSON

    // Coffee Planting Distance
    @Column({type:'json'})
    coffee_planting_distance: JSON

    // Shade Establishment
    @Column({type:'json'})
    shade_establishment: JSON

    // Land Preparation
    @Column({type:'json'})
    layouting: JSON

    @Column({type:'json'})
    staking: JSON

    @Column({type:'json'})
    hole_digging: JSON

    @Column({type:'json'})
    transplanting: JSON

    @Column({type:'json'})
    weeding: JSON

    @Column({type:'json'})
    mulching: JSON

    // Methods of Fertilization
    @Column({type:'json'})
    basal: JSON

    @Column({type:'json'})
    foliar: JSON
    split_application: JSON

    @Column({type:'json'})
    side_dress: JSON

    @Column({type:'json'})
    drenching: JSON

    // Pest and Disease Monitoring
    @Column({type:'json'})
    visual: JSON

    @Column({type:'json'})
    traps: JSON

    @Column({type:'json'})
    sweep_net: JSON

    @Column({type:'json'})
    handpicking: JSON

    // Strategies of Pest Management
    @Column({type:'json'})
    genetic_control: JSON

    @Column({type:'json'})
    regulatory_control: JSON

    @Column({type:'json'})
    cultural_control: JSON

    @Column({type:'json'})
    physical_control: JSON

    @Column({type:'json'})
    mechanical_control: JSON

    @Column({type:'json'})
    biological_control: JSON

    @Column({type:'json'})
    chemical_control: JSON

    // Maintenance Pruning
    @Column({type:'json'})
    single_stem_pruning: JSON

    @Column({type:'json'})
    mulitple_stem_pruning: JSON

    // Methods of Rejuvenation
    @Column({type:'json'})
    side_pruning: JSON

    @Column({type:'json'})
    full_stumping: JSON

    // Rehabilitation
    @Column({type:'json'})
    rehabilitation: JSON

    // Methods of Harvesting
    @Column({type:'json'})
    single_pass_stripping: JSON

    @Column({type:'json'})
    multi_pass_stripping: JSON

    @Column({type:'json'})
    selective_picking: JSON

    @Column({type:'json'})
    mechanical_harvesting: JSON
    
    // Methods of Postharvest Handling
    @Column({type:'json'})
    dry_method: JSON

    @Column({type:'json'})
    wet_method: JSON

    @Column({type:'json'})
    semi_dry_method: JSON

    // System of Drying
    @Column({type:'json'})
    sun_drying: JSON

    @Column({type:'json'})
    solar_drying: JSON

    @Column({type:'json'})
    artificial_drying: JSON

    // Hulling/Milling
    @Column({type:'json'})
    manual_hulling_milling: JSON

    @Column({type:'json'})
    mechanical_hulling_milling: JSON

    // Polishing
    @Column({nullable:true, type:'json'})
    polishing: JSON

    // Cleaning
    cleaning: JSON

    // Sorting
    @Column({type:'json'})
    by_size_density_sorting: JSON

    @Column({type:'json'})
    by_color_sorting: JSON

    // Awareness on Deformity
    @Column({type:'json'})
    black_beans: JSON

    @Column({type:'json'})
    moldy_beans: JSON

    @Column({type:'json'})
    sour_partial_sour_beans: JSON

    @Column({type:'json'})
    crystalized_beans: JSON

    @Column({type:'json'})
    faded_streaked_beans: JSON

    @Column({type:'json'})
    faded_oldish_beans: JSON

    @Column({type:'json'})
    faded_amber_buttery: JSON

    @Column({type:'json'})
    faded_over_dried_beans: JSON

    @Column({type:'json'})
    faded_cut_nipped_beans: JSON

    @Column({type:'json'})
    insect_damaged_beans: JSON

    @Column({type:'json'})
    shrunk_beans: JSON

    @Column({type:'json'})
    immature_beans: JSON

    @Column({type:'json'})
    pressed_crushed_beans: JSON

    @Column({type:'json'})
    wet_undried_beans: JSON

    // Green Coffee Grading
    @Column({type:'json'})
    grade1_specialty: JSON

    @Column({type:'json'})
    grade2_premium: JSON

    @Column({type:'json'})
    grade3_exchange: JSON

    @Column({type:'json'})
    grade4_below_standard: JSON

    @Column({type:'json'})
    grade5_off_grade: JSON

    @OneToOne(()=>Profile,{ onDelete: 'CASCADE', nullable: false})
    @JoinColumn({name: 'profile_id'})
    profile: Profile

    @CreateDateColumn({ name: 'created_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date
}