import TypeValidator from "./type-validator";

declare global {
    export interface Array<T> {
        isIndexType(type: new (...args: any[]) => Boolean | Number | String | Object, index?: number): boolean;
    }

}

Array.prototype.isIndexType = function (type: new (...args: any[]) => Boolean | Number | String | Object, index?: number): boolean {
    return type.name === (Array.from(this)[TypeValidator.isNumber(index) ? index! : 0]).constructor.name;
}