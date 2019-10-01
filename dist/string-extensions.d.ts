declare global {
    export interface String {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
    }
}
export {};
