const index = require("../src/index");
const data = require("../src/data");

describe("Index", () => {
  let result = {};
  beforeAll(() => {
    result = index(data);
  });

  it("should find 537 words", () => {
    expect(Object.keys(result).length).toEqual(537);
  });

  it("should contain 'declaration' on line 0", () => {
    expect(result["declaration"]).toContain(0);
  });

  it("should not duplicate line numbers", () => {
    expect(result["the"].length).toEqual(37);
  });

  it("should be case-insensitive", () => {
    expect(result["he"].length).toEqual(18);
  });
});
