declare global {
    export interface Object {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
        isNullOrUndefined(obj: object | undefined | null): boolean;
    }
}
export {};
