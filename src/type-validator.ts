
export default abstract class TypeValidator {

    public static isNumber<T>(val: T): boolean {
        return (typeof (val) === 'number');
    }

    public static isString<T>(val: T): boolean {
        return (typeof (val) === 'string');
    }

    public static isBoolean<T>(val: T): boolean {
        return (typeof (val) === 'boolean');
    }

    public static isUndefined<T>(val: T): boolean {
        return (typeof (val) === 'undefined');
    }

    public static isObject<T>(val: T): boolean {
        return (typeof (val) === 'object');
    }

}