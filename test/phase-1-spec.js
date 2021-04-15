const chai = require("chai");
const expect = chai.expect;
const { isFive, isOdd, myRange, fizzBuzz} = require("../problems/phase-1");
describe("isFive(num)", () => {
  it("should return true if the num is 5 otherwise false", () => {
    //Arrange
    let num = 5;
    //Act
    let result = isFive(num);

    //Assert
    expect(result).to.equal(true);

    //Arrange
    let num2 = 10;

    //Act
    let result2 =isFive(num2);

    //Assert
    expect(result2).to.equal(false);


  });
});
describe("isOdd(number)", () => {
  it("should return true if number is odd", () => {
    //Arrange
    let number = 3;

    //Act
    let result = isOdd(number);

    //Assert
    expect(result).to.equal(true);


  });
  it("should return false if the num is even", () => {
    //Arrange
    let number = 6;
    //Act
    let result = isOdd(number);

    //Assert
    expect(result).to.equal(false)

  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let number = "string"
    //Act
    //Assert
    expect(() => isOdd(number)).to.throw(Error);

  });
});
describe("myRange(min, max, step)", () => {
  context("if step is not provided", () => {
    it("should return the correct array with default value step=1", () => {
      //Arrange
      let min = 2;
      let max = 6;
      //Act
      let result = myRange(min, max);

      // Assert
      expect(result).to.eql([2, 3, 4, 5, 6]);

    });
  });
  context("if step is provided", () => {
    it("should return the correct array", () => {
      //Arrange
      let min = 2;
      let max = 6;
      let step = 2;

      //Act
      let result = myRange(min, max, step);

      // Assert
      expect(result).to.eql([2, 4, 6]);

    });
  });
  it("should throw an error if num is not type of Number", () => {
    //Arrange
    let min = 'string';
    let max = 'string';
    let step = 'string';

    //Act
    //Assert
    expect(() => myRange(min, max, step)).to.throw(Error);

  });
});
describe('fizzBuzz(max)', ()=> {
  it('should throw a RangeError if max < 0', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should throw a TypeError if max is not a number', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
  it('should return an array from 0 to max (not inclusive) of numbers that are divisible by either 3 or 5 but not both', ()=> {
    //Arrange

    //Act

    //Assert
    expect.fail('Remove this expect.fail and replace it with your test');

  })
})
