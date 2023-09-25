"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = exports.Severity = void 0;
var Severity;
(function (Severity) {
    Severity["LOW"] = "LOW";
    Severity["MEDIUM"] = "MEDIUM";
    Severity["HIGH"] = "HIGH";
    Severity["CRITICAL"] = "CRITICAL";
})(Severity = exports.Severity || (exports.Severity = {}));
var EventType;
(function (EventType) {
    EventType["EARTHQUAKE"] = "EARTHQUAKE";
    EventType["FLOOD"] = "FLOOD";
    EventType["WILDFIRE"] = "WILDFIRE";
    EventType["TSUNAMI"] = "TSUNAMI";
    EventType["VOLCANO"] = "VOLCANO";
    EventType["HURRICANE"] = "HURRICANE";
})(EventType = exports.EventType || (exports.EventType = {}));
//# sourceMappingURL=enums.js.map