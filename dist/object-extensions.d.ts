declare global {
    export interface ObjectConstructor {
        isEmpty(obj: object): boolean;
        isNullOrUndefined(obj: object | undefined | null): boolean;
        isObject(obj: any): boolean;
        isType(obj: object | undefined | null): boolean;
    }
}
export {};
