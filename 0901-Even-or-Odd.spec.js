import {isOddOrEven} from './0901-Even-or-Odd.js'
import {expect} from 'chai'

describe ('', ()=> {
   it ('should return undefined if passed parameter is not-string', ()=>{
    //Arrange
       const inputNotaString = 123;
       const undifinedIput = undefined;
       const nullInput = null;
    //Act
       const resultNotString = isOddOrEven(inputNotaString);
       const resultUndefines = isOddOrEven(undifinedIput);
       const resultNull = isOddOrEven(nullInput);
    //Assert
       expect(resultNotString).to.be.undefined;
       expect(resultUndefines).to.be.undefined;
       expect(resultNull).to.be.undefined;
   })
   it ('should return even if passed string is with even lenght', ()=>{
    //Arrange
       const inputWithEvenLenght = 'hoho';
    //Act
       const evenLengthtString = isOddOrEven(inputWithEvenLenght);
    //Assert
       expect(evenLengthtString).to.equals('even');

   })
   it ('should return odd if passed string is with odd lenght', ()=>{
    //Arrange
       const inputWithOddLenght = 'xix';
    //Act
       const oddLengthString = isOddOrEven(inputWithOddLenght);
    //Assert
       expect(oddLengthString).to.equals('odd');

   })
})
