"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_validator_1 = require("./type-validator");
Boolean.prototype.isNumber = function () {
    return type_validator_1.default.isNumber(this);
};
Boolean.prototype.isString = function () {
    return type_validator_1.default.isString(this);
};
Boolean.prototype.isBoolean = function () {
    return type_validator_1.default.isBoolean(this);
};
Boolean.prototype.isObject = function () {
    return type_validator_1.default.isObject(this);
};
