import TypeValidator from "./type-validator";

declare global {
    export interface Number {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
    }
}

Number.prototype.isNumber = function (): boolean {
    return TypeValidator.isNumber(this);
}
Number.prototype.isString = function (): boolean {
    return TypeValidator.isString(this);
}
Number.prototype.isBoolean = function (): boolean {
    return TypeValidator.isBoolean(this);
}
Number.prototype.isObject = function (): boolean {
    return TypeValidator.isObject(this);
}