import "reflect-metadata"
import { DataSource } from "typeorm"
import {Image} from "./src/models/Image"
import {Location} from "./src/models/Location"
import {Report} from "./src/models/Report"
import * as dotenv from 'dotenv';
import { Severity } from "./src/models/Severity"
import { EventType } from "./src/models/EventType"

dotenv.config({ path: './.env' });

export const AppDataSource = new DataSource({
    type: process.env.DB_TYPE! as any, 
    host: process.env.DB_HOST!,
    port: parseInt(process.env.DB_PORT!) || 5432,
    username: process.env.DB_USERNAME!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_DATABASE!,
    synchronize: true,
    logging: true,
    entities: [Image, Location, Report,EventType,Severity],
    migrations: ["./src/migrations/**/*.ts"],
    subscribers: [],
})


  
  