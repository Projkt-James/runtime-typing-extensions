import "~/index";

test('object isObject returns true', async () => {
    expect(({}).isObject()).toBe(true);
});

test('object isBoolean returns false', async () => {
    expect(({}).isBoolean()).toBe(false);
});
test('object isNumber returns false', async () => {
    expect(({}).isNumber()).toBe(false);
});
test('object isString returns false', async () => {
    expect(({}).isString()).toBe(false);
});

//
// Object.isNullOrUndefined
//

test('null isNullOrUndefined returns true', async () => {
    expect(Object.isNullOrUndefined(null)).toBe(true);
});
test('undefined isNullOrUndefined returns true', async () => {
    expect(Object.isNullOrUndefined(undefined)).toBe(true);
});

test('boolean isNullOrUndefined returns false', async () => {
    expect(Object.isNullOrUndefined(true)).toBe(false);
});
test('number isNullOrUndefined returns false', async () => {
    expect(Object.isNullOrUndefined(123)).toBe(false);
});
test('object isNullOrUndefined returns false', async () => {
    expect(Object.isNullOrUndefined({})).toBe(false);
});
test('string isNullOrUndefined returns false', async () => {
    expect(Object.isNullOrUndefined("test")).toBe(false);
});