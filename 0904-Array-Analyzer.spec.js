import {analyzeArray} from './0904-Array-Analyzer.js'
import {expect} from 'chai'

describe ('the funtion analyzeArray', () => {
  it('should return undfined if passed input is not array', ()=> {
    //Arrange
    const inputNotArray = 'hello';
    //Act
    const resultNotArrayInoput = analyzeArray(inputNotArray);
    //Assert
    expect(resultNotArrayInoput).to.be.undefined;
  })
  it('should return undfined if passed input is empty array', ()=> {
    //Arrange
    const inputEmptyArray = [];
    //Act
    const resultEmptyArrayInoput = analyzeArray(inputEmptyArray);
    //Assert
    expect(resultEmptyArrayInoput).to.be.undefined;

  })
  it('should return correct valueif passed input is multipe different numbers', ()=> {
    //Arrange
    const inputMultipleElements = [3,5,-2, 4,1];
    //Act
    const resultMultipleElements = analyzeArray(inputMultipleElements);
    //Assert
    expect(resultMultipleElements).to.deep.equal({min: -2, max: 5, length: 5});

  })
  it('should return correct value if passed input is array with single element', ()=> {
        //Arrange
        const inputSingleElements = [1];
        //Act
        const resultSingleElement = analyzeArray(inputSingleElements);
        //Assert
        expect(resultSingleElement).to.deep.equal({min: 1, max: 1, length: 1});
  })
  it('should return : if passed input is array with equal elements', ()=> {
    //Arrange
    const inputEqualElements = [1, 1, 1];
    //Act
    const resultEqualElements = analyzeArray(inputEqualElements);
    //Assert
    expect(resultEqualElements).to.deep.equal({min: 1, max: 1, length: 3});
  })

})

