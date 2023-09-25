"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReportService_1 = require("../service/ReportService");
var ReportRepository_1 = require("../repository/ReportRepository");
var tsyringe_1 = require("tsyringe");
var ReportController_1 = require("../controllers/ReportController");
var LocationRepository_1 = require("../repository/LocationRepository");
var ImageRepository_1 = require("../repository/ImageRepository");
var LocationService_1 = require("../service/LocationService");
var UploadImageService_1 = require("../service/UploadImageService");
var ImageController_1 = require("../controllers/ImageController");
var ImageService_1 = require("../service/ImageService");
var LocationController_1 = require("../controllers/LocationController");
// Register Repositories
tsyringe_1.container.register("ReportRepository", { useClass: ReportRepository_1.ReportRepository });
tsyringe_1.container.register("LocationRepository", { useClass: LocationRepository_1.LocationRepository });
tsyringe_1.container.register("ImageRepository", { useClass: ImageRepository_1.ImageRepository });
// Register Services
tsyringe_1.container.register("ReportService", { useClass: ReportService_1.ReportService });
tsyringe_1.container.register("LocationService", { useClass: LocationService_1.LocationService });
tsyringe_1.container.register("ImageService", { useClass: ImageService_1.ImageService });
tsyringe_1.container.register("UploadImageService", { useClass: UploadImageService_1.UploadImageService });
// Register Controllers
tsyringe_1.container.register("ReportController", { useClass: ReportController_1.ReportController });
tsyringe_1.container.register("ImageController", { useClass: ImageController_1.ImageController });
tsyringe_1.container.register("LocationController", { useClass: LocationController_1.LocationController });
//# sourceMappingURL=container.js.map