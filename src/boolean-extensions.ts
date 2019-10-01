import TypeValidator from "./type-validator";

declare global {
    export interface Boolean {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
    }
}

Boolean.prototype.isNumber = function (): boolean {
    return TypeValidator.isNumber(this);
}
Boolean.prototype.isString = function (): boolean {
    return TypeValidator.isString(this);
}
Boolean.prototype.isBoolean = function (): boolean {
    return TypeValidator.isBoolean(this);
}
Boolean.prototype.isObject = function (): boolean {
    return TypeValidator.isObject(this);
}