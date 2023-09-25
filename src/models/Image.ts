    import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
    import { Report } from "./Report";
    import { Exclude } from "class-transformer";

    @Entity()
    export class Image{
        @PrimaryGeneratedColumn()
        id !:number;

        @Column()
        filename!:string;

        @Column()
        filePath!:string;

        @Column('float')
        size!:number;

        @Column()
        format!:string;

        @CreateDateColumn()
        created_at!: Date;

        @UpdateDateColumn()
        updated_at!: Date;

        @ManyToOne(()=> Report, report=>report.images)
        @Exclude()
        report!:Report;
    }