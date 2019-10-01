declare global {
    export interface Object {
        isNumber(): boolean;
        isString(): boolean;
        isBoolean(): boolean;
        isObject(): boolean;
        isNullOrUndefined(obj: any): boolean;
    }
}
export {};
