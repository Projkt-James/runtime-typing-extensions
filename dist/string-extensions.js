"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_validator_1 = require("./type-validator");
String.prototype.isNumber = function () {
    return type_validator_1.default.isNumber(this);
};
String.prototype.isString = function () {
    return type_validator_1.default.isString(this);
};
String.prototype.isBoolean = function () {
    return type_validator_1.default.isBoolean(this);
};
String.prototype.isObject = function () {
    return type_validator_1.default.isObject(this);
};
