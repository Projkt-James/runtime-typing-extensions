"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TypeValidator = /** @class */ (function () {
    function TypeValidator() {
    }
    TypeValidator.isNumber = function (val) {
        return (typeof (val) === 'number');
    };
    TypeValidator.isString = function (val) {
        return (typeof (val) === 'string');
    };
    TypeValidator.isBoolean = function (val) {
        return (typeof (val) === 'boolean');
    };
    TypeValidator.isUndefined = function (val) {
        return (typeof (val) === 'undefined');
    };
    TypeValidator.isObject = function (val) {
        return (typeof (val) === 'object');
    };
    TypeValidator.isArray = function (val) {
        return Object.prototype.toString.call(val) === '[object Array]';
    };
    return TypeValidator;
}());
exports.default = TypeValidator;
