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
export {};
