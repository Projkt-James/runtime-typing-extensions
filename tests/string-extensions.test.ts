import "../src/index";

test("empty string isString retuns true", async () => {
    expect("".isString()).toBe(true);
});
test("string isString retuns true", async () => {
    expect("test".isString()).toBe(true);
});

test("string isBoolean retuns false", async () => {
    expect("".isBoolean()).toBe(false);
});

test("string isNumber retuns false", async () => {
    expect("".isNumber()).toBe(false);
});

test("string isObject retuns false", async () => {
    expect("".isObject()).toBe(false);
});