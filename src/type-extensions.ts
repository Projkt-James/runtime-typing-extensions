import TypeValidator from "./type-validator";

declare global {
    export interface BooleanConstructor {
        isType(val: boolean | undefined | null): boolean;
    }
    export interface StringConstructor {
        isType(val: string | undefined | null): boolean;
    }
    export interface NumberConstructor {
        isType(val: number | undefined | null): boolean;
    }
}

Boolean.isType = function (val: boolean | undefined | null): boolean {
    return TypeValidator.isBoolean(val);
}
String.isType = function (val: string | undefined | null): boolean {
    return TypeValidator.isString(val);
}
Number.isType = function (val: number | undefined | null): boolean {
    return TypeValidator.isNumber(val);
}