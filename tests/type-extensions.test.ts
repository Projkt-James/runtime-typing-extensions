import "../src/index";

//
// Boolean.isType
//
test('true Boolean.isType returns true', async () => {
    expect(Boolean.isType(true)).toBe(true);
});

test('false Boolean.isType returns true', async () => {
    expect(Boolean.isType(false)).toBe(true);
});

test('null Boolean.isType returns false', async () => {
    expect(Boolean.isType(null)).toBe(false);
});

test('undefined Boolean.isType returns false', async () => {
    expect(Boolean.isType(undefined)).toBe(false);
});

test('array Boolean.isType returns false', async () => {
    // @ts-ignore
    expect(Boolean.isType([1, 2, 3])).toBe(false);
});

test('string Boolean.isType returns false', async () => {
    // @ts-ignore
    expect(Boolean.isType("xyz")).toBe(false);
});

test('number Boolean.isType returns false', async () => {
    // @ts-ignore
    expect(Boolean.isType(100)).toBe(false);
});

test('object Boolean.isType returns false', async () => {
    // @ts-ignore
    expect(Boolean.isType({})).toBe(false);
});

//
// String.isType
//
test('empty string String.isType returns true', async () => {
    expect(String.isType("")).toBe(true);
});

test('test string String.isType returns true', async () => {
    expect(String.isType("test")).toBe(true);
});

test('null String.isType returns false', async () => {
    expect(String.isType(null)).toBe(false);
});

test('undefined String.isType returns false', async () => {
    expect(String.isType(undefined)).toBe(false);
});

test('array String.isType returns false', async () => {
    // @ts-ignore
    expect(String.isType([1, 2, 3])).toBe(false);
});

test('boolean true String.isType returns false', async () => {
    // @ts-ignore
    expect(String.isType(true)).toBe(false);
});

test('boolean false String.isType returns false', async () => {
    // @ts-ignore
    expect(String.isType(false)).toBe(false);
});

test('number String.isType returns false', async () => {
    // @ts-ignore
    expect(String.isType(100)).toBe(false);
});

test('object String.isType returns false', async () => {
    // @ts-ignore
    expect(String.isType({})).toBe(false);
});

//
// Number.isType
//
test('zero Number.isType returns true', async () => {
    expect(Number.isType(0)).toBe(true);
});

test('negative Number.isType returns true', async () => {
    expect(Number.isType(-100)).toBe(true);
});

test('positive Number.isType returns true', async () => {
    expect(Number.isType(100)).toBe(true);
});

test('null Number.isType returns false', async () => {
    expect(Number.isType(null)).toBe(false);
});

test('undefined Number.isType returns false', async () => {
    expect(Number.isType(undefined)).toBe(false);
});

test('array Number.isType returns false', async () => {
    // @ts-ignore
    expect(Number.isType([1, 2, 3])).toBe(false);
});

test('boolean true Number.isType returns false', async () => {
    // @ts-ignore
    expect(Number.isType(true)).toBe(false);
});

test('boolean false Number.isType returns false', async () => {
    // @ts-ignore
    expect(Number.isType(false)).toBe(false);
});

test('object Number.isType returns false', async () => {
    // @ts-ignore
    expect(Number.isType({})).toBe(false);
});

test('string Number.isType returns false', async () => {
    // @ts-ignore
    expect(Number.isType("xyz")).toBe(false);
});