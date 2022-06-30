const { expect } = require("chai");
const { lookupChar } = require("./charLookup.js");

describe("charakter lookup", () => {
  it("should return undefined if first char is not string or second not number", () => {
    expect(lookupChar(3, "string")).to.be.undefined;
  });

  it("should return undefined if first char is not string or second not number", () => {
    expect(lookupChar(1, 1)).to.be.undefined;
  });

  it("should return undefined if first char is not string or second not number", () => {
    expect(lookupChar("string", 1.2)).to.be.undefined;
  });

  it("should return undefined if first char is not string or second not number", () => {
    expect(lookupChar("string", "string")).to.be.undefined;
  });

  it("should return Incorrect index if index >= string length", () => {
    expect(lookupChar("string", 100)).to.equal("Incorrect index");
  });

  it("should return Incorrect index if index >= string length", () => {
    expect(lookupChar("string", -1)).to.equal("Incorrect index");
  });

  it("check value with valid params", () => {
    expect(lookupChar("string", 1)).to.equal("t");
  });
});
