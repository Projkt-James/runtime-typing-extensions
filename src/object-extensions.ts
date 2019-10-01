import TypeValidator from "./type-validator";

declare global {
    export interface Object {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
        isNullOrUndefined(obj: any): boolean;
    }
}

Object.prototype.isNumber = function (): boolean {
    return TypeValidator.isNumber(this);
}
Object.prototype.isString = function (): boolean {
    return TypeValidator.isString(this);
}
Object.prototype.isBoolean = function (): boolean {
    return TypeValidator.isBoolean(this);
}
Object.prototype.isObject = function (): boolean {
    return TypeValidator.isObject(this);
}
Object.isNullOrUndefined = function (obj: any): boolean {
    return ((obj === null) || TypeValidator.isUndefined(obj));
}