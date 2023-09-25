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
exports.ImageController = void 0;
var tsyringe_1 = require("tsyringe");
var ImageService_1 = require("../service/ImageService");
var UploadImageService_1 = require("../service/UploadImageService");
var ImageController = /** @class */ (function () {
    function ImageController(imageService, uploadImageService) {
        this.imageService = imageService;
        this.uploadImageService = uploadImageService;
    }
    ImageController.prototype.getAll = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var images, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.imageService.getImages()];
                    case 1:
                        images = _a.sent();
                        res.json(images);
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        res.status(500).json({ message: err_1.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageController.prototype.getOne = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, image, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.imageService.getOne(id)];
                    case 1:
                        image = _a.sent();
                        if (image) {
                            res.json(image);
                        }
                        else {
                            res.status(404).json({ message: "Image not found" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        res.status(500).json({ message: err_2.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    console.log(this.imageService); // Log this.imageService to see if it is defined
                    this.uploadImageService.any()(req, res, function (error) { return __awaiter(_this, void 0, void 0, function () {
                        var savedImage;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (error) {
                                        throw error;
                                    }
                                    if (!req.files) {
                                        res.status(400).json({ message: 'No image provided.' });
                                        return [2 /*return*/];
                                    }
                                    console.log(this.imageService); // Log this.imageService again to see if it is defined within the callback
                                    return [4 /*yield*/, this.imageService.create(req.files[0])];
                                case 1:
                                    savedImage = _a.sent();
                                    res.status(201).json(savedImage);
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (err) {
                    res.status(500).json({ message: err.message });
                }
                return [2 /*return*/];
            });
        });
    };
    ImageController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, updatedImage, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.imageService.update(id, req.body)];
                    case 1:
                        updatedImage = _a.sent();
                        if (updatedImage) {
                            res.json(updatedImage);
                        }
                        else {
                            res.status(404).json({ message: "Image not found" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.status(500).json({ message: err_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageController.prototype.delete = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, success, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = parseInt(req.params.id);
                        return [4 /*yield*/, this.imageService.delete(id)];
                    case 1:
                        success = _a.sent();
                        if (success) {
                            res.status(204).end(); // Successfully deleted, no content to send
                        }
                        else {
                            res.status(404).json({ message: "Image not found" });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_4 = _a.sent();
                        res.status(500).json({ message: err_4.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ImageController = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)("ImageService")),
        __param(1, (0, tsyringe_1.inject)("UploadImageService")),
        __metadata("design:paramtypes", [ImageService_1.ImageService,
            UploadImageService_1.UploadImageService])
    ], ImageController);
    return ImageController;
}());
exports.ImageController = ImageController;
//# sourceMappingURL=ImageController.js.map