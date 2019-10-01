declare global {
    export interface Number {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
    }
}
export {};
