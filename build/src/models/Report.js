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
exports.Report = void 0;
var typeorm_1 = require("typeorm");
var Location_1 = require("./Location");
var Image_1 = require("./Image");
var enums_1 = require("../utils/enums");
var Report = /** @class */ (function () {
    function Report() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Report.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Report.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)("text"),
        __metadata("design:type", String)
    ], Report.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: enums_1.EventType
        }),
        __metadata("design:type", String)
    ], Report.prototype, "eventType", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: enums_1.Severity
        }),
        __metadata("design:type", String)
    ], Report.prototype, "severity", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", Boolean)
    ], Report.prototype, "verified", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Report.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Report.prototype, "updated_at", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Location_1.Location; }, function (location) { return location.reports; }),
        __metadata("design:type", Location_1.Location)
    ], Report.prototype, "location", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return Image_1.Image; }, function (image) { return image.report; }),
        __metadata("design:type", Array)
    ], Report.prototype, "images", void 0);
    Report = __decorate([
        (0, typeorm_1.Entity)()
    ], Report);
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=Report.js.map