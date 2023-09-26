import { ReportService } from "../service/ReportService";
import { ReportRepository } from "../repository/ReportRepository";
import { container } from "tsyringe";
import { ReportController } from "../controllers/ReportController";
import { LocationRepository } from "../repository/LocationRepository";
import { ImageRepository } from "../repository/ImageRepository";
import { LocationService } from "../service/LocationService";
import { UploadImageService } from "../service/UploadImageService";
import { ImageController } from "../controllers/ImageController";
import { ImageService } from "../service/ImageService";
import { LocationController } from "../controllers/LocationController";
import { SeverityRepository } from "../repository/SeverityRepository";
import { EventTypeRepository } from "../repository/EventTypeRepository";
import { EventTypeService } from "../service/EventTypeService";
import { SeverityService } from "../service/SeverityService";
import { SeverityController } from "../controllers/SeverityController";
import { EventTypeController } from "../controllers/EventTypeController";

// Register Repositories
container.register("ReportRepository", { useClass: ReportRepository });
container.register("LocationRepository", { useClass: LocationRepository });
container.register("ImageRepository", { useClass: ImageRepository });
container.register("SeverityRepository", { useClass: SeverityRepository });
container.register("EventTypeRepository", { useClass: EventTypeRepository });
// Register Services
container.register("ReportService", { useClass: ReportService });
container.register("LocationService", { useClass: LocationService });
container.register("ImageService", { useClass: ImageService });
container.register("UploadImageService", { useClass: UploadImageService });
container.register("EventTypeService", { useClass: EventTypeService });
container.register("SeverityService", { useClass: SeverityService });
// Register Controllers
container.register("ReportController", { useClass: ReportController });
container.register("ImageController", { useClass: ImageController });
container.register("LocationController", { useClass: LocationController });
container.register("SeverityController", { useClass: SeverityController });
container.register("EventTypeController", { useClass: EventTypeController });