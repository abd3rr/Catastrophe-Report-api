import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany
} from "typeorm";
import { Report } from "./Report";
import { Exclude } from "class-transformer";

@Entity()
export class EventType {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    type!: string; // Use string if you wish to allow dynamic values.

    @OneToMany(() => Report, report => report.eventType)
    @Exclude()
    reports!: Report[];
}
