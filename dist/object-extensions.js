"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_validator_1 = require("./type-validator");
Object.prototype.isNumber = function () {
    return type_validator_1.default.isNumber(this);
};
Object.prototype.isString = function () {
    return type_validator_1.default.isString(this);
};
Object.prototype.isBoolean = function () {
    return type_validator_1.default.isBoolean(this);
};
Object.prototype.isObject = function () {
    return type_validator_1.default.isObject(this);
};
Object.isNullOrUndefined = function (obj) {
    return ((obj === null) || type_validator_1.default.isUndefined(obj));
};
