import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Location } from "./Location";
import { Image } from "./Image";
import { EventType } from "./EventType";
import { Severity } from "./Severity";

@Entity()
export class Report{

    @PrimaryGeneratedColumn()
    id !:number;

    @Column()
    title!:string;

    @Column("text")
    description!:string;

    @ManyToOne(() => EventType, eventType => eventType.reports)
    eventType!: EventType;

    @ManyToOne(() => Severity, severity => severity.reports)
    severity!: Severity;

    @Column()
    verified!:boolean;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date

    @ManyToOne (()=>Location, location=>location.reports)
    location!:Location;

    @OneToMany(()=>Image, image=>image.report)
    images!:Image[];


}