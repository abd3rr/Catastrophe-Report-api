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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Location = void 0;
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var Report_1 = require("./Report");
var Location = /** @class */ (function () {
    function Location() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Location.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "geometry", nullable: true, spatialFeatureType: "Point", srid: 4326 }),
        __metadata("design:type", Object)
    ], Location.prototype, "coordinates", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Location.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Location.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Report_1.Report; }, function (report) { return report.location; }),
        (0, class_transformer_1.Exclude)(),
        __metadata("design:type", Array)
    ], Location.prototype, "reports", void 0);
    Location = __decorate([
        (0, typeorm_1.Entity)()
    ], Location);
    return Location;
}());
exports.Location = Location;
//# sourceMappingURL=Location.js.map