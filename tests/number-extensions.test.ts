import "~/index";

test('4 isNumber returns true', async () => {
    expect((4).isNumber()).toBe(true);
});
test('Infinity isNumber returns true', async () => {
    expect((Infinity).isNumber()).toBe(true);
});
test('NaN isNumber returns true', async () => {
    expect((NaN).isNumber()).toBe(true);
});

// isBoolean
test('100 isBoolean returns false', async () => {
    expect((100).isBoolean()).toBe(false);
});
test('Infinity isBoolean returns false', async () => {
    expect((Infinity).isBoolean()).toBe(false);
});
test('NaN isBoolean returns false', async () => {
    expect((NaN).isBoolean()).toBe(false);
});

// isString
test('100 isString returns false', async () => {
    expect((100).isString()).toBe(false);
});
test('Infinity isString returns false', async () => {
    expect((Infinity).isString()).toBe(false);
});
test('Infinity isString returns false', async () => {
    expect((NaN).isString()).toBe(false);
});

// isObject
test('100 isObject returns false', async () => {
    expect((100).isObject()).toBe(false);
});
test('Infinity isObject returns false', async () => {
    expect((Infinity).isObject()).toBe(false);
});
test('NaN isObject returns false', async () => {
    expect((NaN).isObject()).toBe(false);
});