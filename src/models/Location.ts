import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToMany, Point, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Report } from "./Report";


@Entity()
export class Location{
    @PrimaryGeneratedColumn()
    id !:number;

    @Column({type:"geometry",nullable:true, spatialFeatureType:"Point", srid:4326})
    coordinates!:Point;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;
    
    @OneToMany (()=>Report, report=>report.location)
    @Exclude()
    reports!:Report[];

}