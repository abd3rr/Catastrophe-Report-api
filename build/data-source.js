"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var Image_1 = require("./src/models/Image");
var Location_1 = require("./src/models/Location");
var Report_1 = require("./src/models/Report");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "cataReportsDB",
    synchronize: true,
    logging: true,
    entities: [Image_1.Image, Location_1.Location, Report_1.Report],
    migrations: ["./src/migrations/**/*.ts"],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map