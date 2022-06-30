const { expect } = require("chai");
const { mathEnforcer } = require("./mathEnforcer.js");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("should return undefined if param is not a num", () => {
      expect(mathEnforcer.addFive("A")).to.be.undefined;
    });

    it("should return correct answer with a positive num", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
    });

    it("should return correct answer with a floating num", () => {
      expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
    });

    it("should return correct answer with a negative num", () => {
      expect(mathEnforcer.addFive(-5)).to.equal(0);
    });
  });
  describe("subtractTen", () => {
    it("should return undefined if param is not a num", () => {
      expect(mathEnforcer.subtractTen("A")).to.be.undefined;
    });

    it("should return correct answer with a positive num", () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
    });

    it("should return correct answer with a floating num", () => {
      expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
    });

    it("should return correct answer with a negative num", () => {
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
    });
  });
  describe("sum", () => {
    it("should return undefined for first invalind param", () => {
      expect(mathEnforcer.sum("a", 5)).to.be.undefined;
    });

    it("should return undefined for second invalind param", () => {
      expect(mathEnforcer.sum(5, "a")).to.be.undefined;
    });

    it("should return correct answer with a positive num", () => {
      expect(mathEnforcer.sum(11, 11)).to.equal(22);
    });

    it("should return correct answer with a floating num", () => {
      expect(mathEnforcer.sum(10.1, 10.1)).to.be.closeTo(20.2, 0.01);
    });

    it("should return correct answer with a negative num", () => {
      expect(mathEnforcer.sum(-11, -11)).to.equal(-22);
    });
  });
});
