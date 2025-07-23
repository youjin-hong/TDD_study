const { sum, person, toggle, range } = require("./index");

describe("test index.js file", () => {
  it("sum 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("makes a person", () => {
    expect(person("Hong", 24)).toEqual({
      name: "Hong",
      age: 24,
    });
  });
  it("return false", () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(true)).not.toBeTruthy();
  });
  it("has 2", () => {
    expect(range(1, 3)).toContain(2);
  });
});
