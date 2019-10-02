import TypeValidator from "./type-validator";

declare global {
    export interface ArrayConstructor {
        isNullOrUndefined<T>(arr: Array<T> | undefined | null): boolean;
        isNullOrEmpty<T>(arr: Array<T> | undefined | null): boolean;
    }
    export interface Array<T> {
        isArray(): boolean;
        isIndexType(type: new (...args: any[]) => Boolean | Number | String | Object, index?: number): boolean;
    }
}

Array.isNullOrUndefined = function <T>(arr: Array<T> | undefined | null): boolean {
    if (arr === null || TypeValidator.isUndefined(arr)) {
        return true;
    } else if (Array.isArray(arr)) return false; 
    throw new Error("TypeError: Provided param is not of type 'array'");
}
Array.isNullOrEmpty = function <T>(arr: Array<T> | undefined | null): boolean {
    if (arr === null || TypeValidator.isUndefined(arr)) {
        return true;
    } else if (Array.isArray(arr)) return (arr!.length <= 0);
    throw new Error("TypeError: Provided param is not of type 'array'");
}
Array.prototype.isArray = function (): boolean {
    if (Array.isArray) return Array.isArray(Array.from(this));
    return TypeValidator.isArray(Array.from(this));
}
Array.prototype.isIndexType = function (type: new (...args: any[]) => Boolean | Number | String | Object, index?: number): boolean {
    return type.name === (Array.from(this)[TypeValidator.isNumber(index) ? index! : 0]).constructor.name;
}