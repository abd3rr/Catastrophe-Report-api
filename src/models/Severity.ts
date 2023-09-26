import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { Report } from "./Report";
import { Exclude } from "class-transformer";

@Entity()
export class Severity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    level!: string; // Use string if you wish to allow dynamic values.

    @OneToMany(() => Report, report => report.severity)
    @Exclude()
    reports!: Report[];
}
