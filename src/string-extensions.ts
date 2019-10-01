import TypeValidator from "./type-validator";

declare global {
    export interface String {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
    }
}

String.prototype.isNumber = function (): boolean {
    return TypeValidator.isNumber(this);
}
String.prototype.isString = function (): boolean {
    return TypeValidator.isString(this);
}
String.prototype.isBoolean = function (): boolean {
    return TypeValidator.isBoolean(this);
}
String.prototype.isObject = function (): boolean {
    return TypeValidator.isObject(this);
}