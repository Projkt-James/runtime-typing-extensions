"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_validator_1 = __importDefault(require("./type-validator"));
Object.isEmpty = function (obj) {
    return Object.keys(obj).length <= 0;
};
Object.isNullOrUndefined = function (obj) {
    return ((obj === null) || type_validator_1.default.isUndefined(obj));
};
Object.isObject = function (obj) {
    return type_validator_1.default.isObject(obj);
};
Object.isType = function (obj) {
    return type_validator_1.default.isObject(obj);
};
