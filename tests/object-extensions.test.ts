import "../src/index";

//
// Object.isEmpty
//
test('empty object Object.isEmpty returns true', async () => {
    expect(Object.isEmpty({})).toBe(true);
});
test('object Object.isEmpty returns false', async () => {
    expect(Object.isNullOrUndefined({ value1: "1", value2: 2 })).toBe(false);
});

test('array Object.isEmpty returns false', async () => {
    expect(Object.isNullOrUndefined([1, 2, 3])).toBe(false);
});
test('boolean Object.isEmpty returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined(false)).toBe(false);
});
test('number Object.isEmpty returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined(123)).toBe(false);
});
test('string Object.isEmpty returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined("")).toBe(false);
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

test('array isNullOrUndefined returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined([1, 2, 3])).toBe(false);
});
test('boolean isNullOrUndefined returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined(true)).toBe(false);
});
test('number isNullOrUndefined returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined(123)).toBe(false);
});
test('object isNullOrUndefined returns false', async () => {
    expect(Object.isNullOrUndefined({})).toBe(false);
});
test('string isNullOrUndefined returns false', async () => {
    // @ts-ignore
    expect(Object.isNullOrUndefined("test")).toBe(false);
});