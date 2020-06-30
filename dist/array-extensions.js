"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_validator_1 = __importDefault(require("./type-validator"));
Array.isNullOrUndefined = function (arr) {
    if (arr === null || type_validator_1.default.isUndefined(arr)) {
        return true;
    }
    else if (Array.isArray(arr))
        return false;
    throw new Error("TypeError: Provided param is not of type 'array'");
};
Array.isNullOrEmpty = function (arr) {
    if (arr === null || type_validator_1.default.isUndefined(arr)) {
        return true;
    }
    else if (Array.isArray(arr))
        return (arr.length <= 0);
    throw new Error("TypeError: Provided param is not of type 'array'");
};
Array.prototype.isArray = function () {
    if (Array.isArray)
        return Array.isArray(Array.from(this));
    return type_validator_1.default.isArray(Array.from(this));
};
Array.prototype.isIndexType = function (type, index) {
    return type.name === (Array.from(this)[type_validator_1.default.isNumber(index) ? index : 0]).constructor.name;
};
