"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
var tsyringe_1 = require("tsyringe");
var LocationRepository_1 = require("../repository/LocationRepository");
var LocationService = /** @class */ (function () {
    function LocationService(locationRepository) {
        this.locationRepository = locationRepository;
    }
    LocationService.prototype.getLocations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationRepository.getLocations()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LocationService.prototype.getOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationRepository.getLocationById(id)];
                    case 1:
                        location = _a.sent();
                        return [2 /*return*/, location ? location : null];
                }
            });
        });
    };
    LocationService.prototype.create = function (location) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, longitude, latitude;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!location || !location.coordinates) {
                            throw new Error('Location or Coordinates are not defined');
                        }
                        _a = location.coordinates, longitude = _a.longitude, latitude = _a.latitude;
                        if (longitude === undefined || latitude === undefined) {
                            throw new Error('Longitude or Latitude are not defined in coordinates');
                        }
                        location.coordinates = {
                            type: "Point",
                            coordinates: [longitude, latitude]
                        };
                        return [4 /*yield*/, this.locationRepository.createLocation(location)];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    LocationService.prototype.update = function (id, updatedLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var location;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationRepository.updateLocation(id, updatedLocation)];
                    case 1:
                        location = _a.sent();
                        return [2 /*return*/, location ? location : null];
                }
            });
        });
    };
    LocationService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.locationRepository.deleteLocation(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    LocationService = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("LocationRepository")),
        __metadata("design:paramtypes", [LocationRepository_1.LocationRepository])
    ], LocationService);
    return LocationService;
}());
exports.LocationService = LocationService;
//# sourceMappingURL=LocationService.js.map