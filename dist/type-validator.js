"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeValidator {
    static isNumber(val) {
        return (typeof (val) === 'number');
    }
    static isString(val) {
        return (typeof (val) === 'string');
    }
    static isBoolean(val) {
        return (typeof (val) === 'boolean');
    }
    static isUndefined(val) {
        return (typeof (val) === 'undefined');
    }
    static isObject(val) {
        return (typeof (val) === 'object');
    }
}
exports.default = TypeValidator;
