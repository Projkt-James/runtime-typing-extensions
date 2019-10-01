export default abstract class TypeValidator {
    static isNumber<T>(val: T): boolean;
    static isString<T>(val: T): boolean;
    static isBoolean<T>(val: T): boolean;
    static isUndefined<T>(val: T): boolean;
    static isObject<T>(val: T): boolean;
}
