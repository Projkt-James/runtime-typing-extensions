declare global {
    export interface BooleanConstructor {
        isType(val: boolean | undefined | null): boolean;
    }
    export interface StringConstructor {
        isType(val: string | undefined | null): boolean;
    }
    export interface NumberConstructor {
        isType(val: number | undefined | null): boolean;
    }
}
export {};
