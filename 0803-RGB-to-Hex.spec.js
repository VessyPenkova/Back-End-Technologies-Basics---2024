import {rgbToHexColor} from './0803-RGB-to-Hex.js'
import { expect } from 'chai'

describe('The Function rgbToHexColor true negative tests', () => {

  it('sould return undefined if given red   value in negative', ()=> {
    //Arrange
    const negativeRedValue = -123;
    const greenValue = 0;
    const blueValue = 0;
    //Act
    const NegativeRedresult = rgbToHexColor(negativeRedValue, greenValue, blueValue)
    //Assert
    expect(NegativeRedresult).to.be.undefined;

  })
  it('sould return undefined if given green value in negative', ()=> {
    //Arrange
    const RedValue = 0;
    const negativegreenValue = -123;
    const blueValue = 0;
    //Act
    const NegativeGreenResult = rgbToHexColor(RedValue, negativegreenValue, blueValue)
    //Assert
    expect(NegativeGreenResult).to.be.undefined;

  })
  it('sould return undefined if given blue  value in negative', ()=> {
    //Arrange
    const RedValue = 0;
    const greenValue = 0;
    const negativeBlueValue = -123;
    //Act
    const NegativeBlueResult = rgbToHexColor(RedValue, greenValue, negativeBlueValue)
    //Assert
    expect(NegativeBlueResult).to.be.undefined;

  })
  it('sould return undefined if the given red   value is non-numberic value', ()=> {
    //Arrange
    const redValue = '123';
    const greenValue = 0;
    const blueValue = 0;
    //Act
    const resultnonNumbericRedVsalue = rgbToHexColor(redValue, greenValue, blueValue)
    //Assert
    expect(resultnonNumbericRedVsalue).to.be.undefined;
  })
  it('sould return undefined if the given green value is non-numberic value', ()=> {
    //Arrange
    const redValue = 0;
    const nonNumbericGreenValue = '123';
    const blueValue = 0;
    //Act
    const resultnonNumbericGreenValue = rgbToHexColor(redValue, nonNumbericGreenValue, blueValue)
    //Assert
    expect(resultnonNumbericGreenValue).to.be.undefined;
  })
  it('sould return undefined if the given blue  value is non-numberic value', ()=> {
    //Arrange
    const redValue = 0;
    const GreenValue = 0;
    const nonNumbericBlueValue = '123';
    //Act
    const resultnonNumbericBlueValue = rgbToHexColor(redValue, GreenValue, nonNumbericBlueValue)
    //Assert
    expect(resultnonNumbericBlueValue).to.be.undefined;
  })
  it('sould return undefined if the given red   value is too big', ()=> {
    //Arrange
    const tooBigRedValue = 9999;
    const greenValue = 0;
    const blueValue = 0;
    //Act
    const resultTooBigRedValue = rgbToHexColor(tooBigRedValue, greenValue, blueValue)
    //Assert
    expect(resultTooBigRedValue).to.be.undefined;
  })
  it('sould return undefined if the given green value is too big', ()=> {
    //Arrange
    const redValue = 0;
    const tooBigGreenValue = 999;
    const blueValue = 0;
    //Act
    const resultTooBigGreenValue = rgbToHexColor(redValue, tooBigGreenValue, blueValue)
    //Assert
    expect(resultTooBigGreenValue).to.be.undefined;
  })
  it('sould return undefined if the given blue value is too big', ()=> {
    //Arrange
    const redValue = 0;
    const greenValue = 0;
    const tooBigBlueValue = 999;
    //Act
    const resultTooBigBlueValue = rgbToHexColor(redValue, greenValue, tooBigBlueValue)
    //Assert
    expect(resultTooBigBlueValue).to.be.undefined;
  })
})


describe('The Function rgbToHexColor true possitive tests', () => {

  it('sould return correct hex value if red value is valid', ()=> {
    //Arrange
    const redValue = 223;
    const greenValue = 123;
    const blueValue = 12;
    //Act
    const result = rgbToHexColor(redValue, greenValue, blueValue)
    //Assert
    expect(result).to.equals('#DF7B0C');

  })
  it('sould return correct hex value if green value is valid', ()=> {
  //Arrange
  const redValue = 223;
  const greenValue = 123;
  const blueValue = 12;
  //Act
  const result = rgbToHexColor(redValue, greenValue, blueValue)
  //Assert
  expect(result).to.equals('#DF7B0C');

  })
  it('sould return correct hex value if blue value is valid', ()=> {
   //Arrange
   const redValue = 223;
   const greenValue = 123;
   const blueValue = 12;
   //Act
   const result = rgbToHexColor(redValue, greenValue, blueValue)
   //Assert
   expect(result).to.equals('#DF7B0C');
  })
})

describe('The Function rgbToHexColor edge cases true possitive tests', () => {

    it('sould return correct hex value if min value is given', ()=> {
      //Arrange
      const redValue = 0;
      const greenValue = 0;
      const blueValue = 0;
      //Act
      const result = rgbToHexColor(redValue, greenValue, blueValue)
      //Assert
      expect(result).to.equals('#000000');
  
    })
    it('sould return correct hex value if max value is given', ()=> {
    //Arrange
    const redValue = 255;
    const greenValue = 255;
    const blueValue = 255;
    //Act
    const result = rgbToHexColor(redValue, greenValue, blueValue)
    //Assert
    expect(result).to.equals('#FFFFFF'); 
    })
  })
