"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/container");
var bodyParser = require("body-parser");
var cors = require("cors");
var express = require("express");
var routes_1 = __importDefault(require("./routes/routes"));
require("reflect-metadata");
var app = express();
app.use(cors());
app.use(bodyParser.json());
// Defining routes  
app.use('/api', routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map