import {lookupChar} from './0902-Char-Lookup.js'
import {expect} from 'chai'

describe('Prob 0902. the function lookupChar', () => {

  it   ('01. should return undefined if Param1 is number and Param2 is correct', ()=> {
            //Arrande
            const firstParamIsInteger = 123;
            const indexCorrect = 1;
            //Act
            const resultNotString = lookupChar(firstParamIsInteger, indexCorrect);
            //Assert
            expect(resultNotString).to.be.undefined;   
  })  
  it   ('02. should return undefined if Param1 is array empty and Param2 is correct', ()=> {
            //Arrange
            const firstParamIsemptyArray = [];
            const indexCorrect = 0;
            //Act
            const resultFisrstParamEmptyArray = lookupChar(firstParamIsemptyArray, indexCorrect);
            //Assert
            expect(resultFisrstParamEmptyArray).to.be.undefined;
  })  
  it   ('03. should return undefined if Param1 is null and Param2 is correct', ()=> {
            //Arrange
            const firstParamIsNull = null;
            const indexCorrect = 0;
            //Act
            const resultFisrtParamNull = lookupChar(firstParamIsNull, indexCorrect);
            //Assert
            expect(resultFisrtParamNull).to.be.undefined;
  })
  it   ('04. should return undefined if Param1 is flaotingNumber and Param2 is correct', ()=> {
            //Arrange
            const firstParamIsFloatingNumber = 10.10;
            const indexCorrect = 0;
            //Act
            const resultFirstParamFloatNum = lookupChar(firstParamIsFloatingNumber, indexCorrect);
            //Assert       
            expect(resultFirstParamFloatNum).to.be.undefined;
  })
  it   ('05. should return undefined if Param1 is undefined and Param2 is correct', ()=> {
            //Arrange
            const firstParamIsundefined = undefined;
            const indexCorrect = 0;
            //Act
            const resultFisrtParamUndefined = lookupChar(firstParamIsundefined, indexCorrect);
            //Assert       
            expect(resultFisrtParamUndefined).to.be.undefined;
  })
  it   ('06. should return undefined if Param1 is correct Param2 is not a number', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexNotANumber = '10.10';
            //Act
            const resultSecondParamStr = lookupChar(firstParamIsString, indexNotANumber);
            //Assert
            expect(resultSecondParamStr).to.be.undefined;
  })
  it   ('07. should return undefined if Param1 is correct Param2 is char', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexIsChar = '%';
            //Act
            const resultSecondParamChar = lookupChar(firstParamIsString, indexIsChar);
            //Assert
            expect(resultSecondParamChar).to.be.undefined;
  })
  it   ('08. should return undefined if Param1 is correct Param2 is floating Number', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexIsFloatingNumber = 10.10;
            //Act
            const resultSecondParamFloatNum = lookupChar(firstParamIsString, indexIsFloatingNumber);
            //Assert
            expect(resultSecondParamFloatNum).to.be.undefined;
  })
  it   ('09. should return undefined if Param1 is correct Param2 is null', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexIsNull = null;
            //Act
            const resultSecondParamNull = lookupChar(firstParamIsString, indexIsNull);
            //Assert
            expect(resultSecondParamNull).to.be.undefined;
  })
  it   ('10. should return undefined if Param1 is correct Param2 is undefinded', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexIsUndefined = undefined;
            //Act
            const resultEcondParamUndefined = lookupChar(firstParamIsString, indexIsUndefined);
            //Assert
            expect(resultEcondParamUndefined).to.be.undefined;
  })
  it   ('11. should return undefined if Param1 is correct Param2 is string', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexIsUndefined = 'hello';
            //Act
            const resultSecondParamString = lookupChar(firstParamIsString, indexIsUndefined);
            //Assert
            expect(resultSecondParamString).to.be.undefined;
  })
  it   ('12. should return undefined if Param1 is not correct and Param2 is not correct', ()=> {
            //Arrange
            const firstParamIsString = 123;
            const indexNotANumber = 'v';
            //Act
            const resultFirstAndSecondParamUndefined = lookupChar(firstParamIsString, indexNotANumber);
            //Assert
            expect(resultFirstAndSecondParamUndefined).to.be.undefined;
  })
  it   ('13. should return Incorrect index if second parameneter index is lower then 0', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexUnderZero = -1;
            //Act
            const resultIndexShorter = lookupChar(firstParamIsString, indexUnderZero);
            //Assert
            expect(resultIndexShorter).equals("Incorrect index");
  })
  it   ('14. should return Incorrect index if second parameneter index is equal to the string length', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexEqualsToStringLength = 4;
            //Act
            const resultIndexEqualToStrLength = lookupChar(firstParamIsString, indexEqualsToStringLength);
            //Assert
            expect(resultIndexEqualToStrLength).equals("Incorrect index");
  })
  it   ('15. should return Incorrect index if passed first parameter is stringempty', ()=> {
            //Arrange
            const firstParamIsemptyString = '';
            const indexCorrect = 0;
            //Act
            const resultFirstParamEmptyStr = lookupChar(firstParamIsemptyString, indexCorrect);
            //Assert
            expect(resultFirstParamEmptyStr).equals('Incorrect index');
  })
  it   ('16.should return Incorrect index if second parameneter index is bigger then length of the first paramenter', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexBiggerThenStringLength = 10;
            //Act
            const resultIndexBiggerThenStringLength = lookupChar(firstParamIsString, indexBiggerThenStringLength);
            //Assert
            expect(resultIndexBiggerThenStringLength).equals("Incorrect index");
  })
  it   ('17.should return the correct char if both parameters are correct', ()=> {
            //Arrange
            const firstParamIsString = 'hoho';
            const indexISCorrect = 2;
            //Act
            const resultCorrectInput = lookupChar(firstParamIsString, indexISCorrect);
            //Assert
            expect(resultCorrectInput).equals('h');
  })
  
});
