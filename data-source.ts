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
    url: process.env.DB_URL,
    synchronize: true,
    logging: true,
    entities: [Image, Location, Report,EventType,Severity],
    migrations: ["./src/migrations/**/*.ts"],
    subscribers: [],
})


  
  