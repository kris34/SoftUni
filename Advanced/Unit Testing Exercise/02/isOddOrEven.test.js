const { isOddOrEven } = require("./isOddOrEven");
const { expect } = require("chai");

describe("is odd or even", () => {
  it("should be undefined if number", () => {
    expect(isOddOrEven(2)).to.be.undefined;
  });

  it("should return undefined if Array", () => {
    expect(isOddOrEven([])).to.be.undefined;
  });

  it("should return undefind if object", () => {
    expect(isOddOrEven({})).to.be.undefined;
  });

  it("should return even if even", () => {
    expect(isOddOrEven("hello")).to.equal("odd");
  });
  it("should return odd if odd ", () => {
    expect(isOddOrEven("helloo")).to.equal("even");
  });
});
