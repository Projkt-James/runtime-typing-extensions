"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_validator_1 = __importDefault(require("./type-validator"));
Number.prototype.isNumber = function () {
    return type_validator_1.default.isNumber(this);
};
Number.prototype.isString = function () {
    return type_validator_1.default.isString(this);
};
Number.prototype.isBoolean = function () {
    return type_validator_1.default.isBoolean(this);
};
Number.prototype.isObject = function () {
    return type_validator_1.default.isObject(this);
};
