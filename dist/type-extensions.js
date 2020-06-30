"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_validator_1 = __importDefault(require("./type-validator"));
Boolean.isType = function (val) {
    return type_validator_1.default.isBoolean(val);
};
String.isType = function (val) {
    return type_validator_1.default.isString(val);
};
Number.isType = function (val) {
    return type_validator_1.default.isNumber(val);
};
