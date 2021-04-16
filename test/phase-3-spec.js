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
      
      //Act
      
      //Assert
       expect.fail('Remove this expect.fail and replace it with your test');
    })
  })
  describe('removeConsonants function', function () {
})
  it('should return the word with the consonants removed', function() {
    //Arrange
    
    //Act
    
    //Assert
     expect.fail('Remove this expect.fail and replace it with your test');
  })
  describe('pigLatin function', function () {
})
  it('should return the word converted to pig latin', function() {
    //Arrange
    
    //Act
    
    //Assert
     expect.fail('Remove this expect.fail and replace it with your test');
    
  })
})