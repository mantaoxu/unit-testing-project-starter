const chai = require("chai");
const expect = chai.expect;

const { Word } = require('../problems/phase-3')
describe('Word', function () {
  describe('Word constructor function', function () {
    it('should have a "word" property', function() {
      //Arrange & Act
      let word;
      word = new Word('Friday')

      expect(word).to.have.property('word');

    })
     it('should set the "word" property when a new word is created', function() {
      //Arrange & Act
      let word;
      word = new Word('Friday');


      //Assert
       expect(word.word).to.eql('Friday');

    })
  })
  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function() {
      //Arrange
      let word = new Word("Friday");

      //Act
      let result = word.removeVowels()

      //Assert
       expect(result).to.eql("Frdy");
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange
    let word = new Word("Friday");

    //Act
    let result = word.removeConsonants();

    //Assert
     expect(result).to.eql("ia");
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    let word = new Word("Friday");

    //Act
    let result = word.pigLatin();

    //Assert
     expect(result).to.eql("idayFray");

  })
})
