import "../src/index";

// isIndexType - Boolean
test('boolean[] isIndexType(Boolean) returns true', async () => {
    expect([true, false].isIndexType(Boolean)).toBe(true);
});
test('number[] isIndexType(Boolean) returns false', async () => {
    expect([100, 200].isIndexType(Boolean)).toBe(false);
});
test('string[] isIndexType(Boolean) returns false', async () => {
    expect(['', ''].isIndexType(Boolean)).toBe(false);
});

// isIndexType - String
test('string[] isIndexType(String) returns true', async () => {
    expect(['string1', 'string2'].isIndexType(String)).toBe(true);
});
test('number[] isIndexType(String) returns false', async () => {
    expect([100, 200].isIndexType(String)).toBe(false);
});
test('boolean[] isIndexType(Number) returns false', async () => {
    expect([true, false].isIndexType(String)).toBe(false);
});

// isIndexType - Number
test('number[] isIndexType(Number) returns true', async () => {
    expect([100, 200].isIndexType(Number)).toBe(true);
});
test('boolean[] isIndexType(Number) returns false', async () => {
    expect([true, false].isIndexType(Number)).toBe(false);
});
test('string[] isIndexType(Number) returns false', async () => {
    expect(['', ''].isIndexType(Number)).toBe(false);
});

class TestClass {}
class DifferentClass {}

test('TestClass[] isIndexType(TestClass) returns true', async () => {
    expect([new TestClass(), new TestClass()].isIndexType(TestClass)).toBe(true);
});

test('mixed object[] isIndexType(TestClass, 0) returns true', async () => {
    expect([new TestClass(), new DifferentClass()].isIndexType(TestClass, 0)).toBe(true);
});
test('mixed object[] isIndexType(TestClass, 1) returns false', async () => {
    expect([new TestClass(), new DifferentClass()].isIndexType(TestClass, 1)).toBe(false);
});

test('boolean[] isIndexType(TestClass) returns false', async () => {
    expect([false, true].isIndexType(TestClass)).toBe(false);
});
test('number[] isIndexType(TestClass) returns false', async () => {
    expect([0, 1].isIndexType(TestClass)).toBe(false);
});
test('string[] isIndexType(TestClass) returns false', async () => {
    expect([0, 1].isIndexType(TestClass)).toBe(false);
});