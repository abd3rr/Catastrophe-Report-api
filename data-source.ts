import "reflect-metadata"
import { DataSource } from "typeorm"
import {Image} from "./src/models/Image"
import {Location} from "./src/models/Location"
import {Report} from "./src/models/Report"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "cataReportsDB",
    synchronize: true,
    logging: true,
    entities: [Image, Location, Report],
    migrations: ["./src/migrations/**/*.ts"],
    subscribers: [],
})


  
  