import TypeValidator from "./type-validator";

declare global {
    export interface ObjectConstructor {
        isEmpty(obj: object): boolean;
        isNullOrUndefined(obj: object | undefined | null): boolean;
        isObject(obj: any): boolean;
        isType(obj: object | undefined | null): boolean;
    }
}

Object.isEmpty = function (obj: object): boolean {
    return Object.keys(obj).length <= 0;
}
Object.isNullOrUndefined = function (obj: object | undefined | null): boolean {
    return ((obj === null) || TypeValidator.isUndefined(obj));
}
Object.isObject = function (obj: any): boolean {
    return TypeValidator.isObject(obj);
}
Object.isType = function (obj: object | undefined | null): boolean {
    return TypeValidator.isObject(obj);
}