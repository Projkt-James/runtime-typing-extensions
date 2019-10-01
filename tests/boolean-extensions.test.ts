import "~/index";

test('True isBoolean returns true', async () => {
    expect(true.isBoolean()).toBe(true);
});
test('False isBoolean returns true', async () => {
    expect(false.isBoolean()).toBe(true);
});


test('Boolean isNumber returns false', async () => {
    expect(true.isNumber()).toBe(false);
});

test('Boolean isString returns false', async () => {
    expect(false.isString()).toBe(false);
});

test('Boolean isObject returns false', async () => {
    expect(true.isObject()).toBe(false);
});