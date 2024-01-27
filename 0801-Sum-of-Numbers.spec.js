import {sum} from './0801-Sum-of-Numbers.js'
import { expect} from 'chai';
describe('The function sum', ()=>{
    it('should return zero if un empty array is given', ()=>{
        //Arrange
        const inputArray = [];
        //Act
        const result = sum(inputArray);
        //Assert
        expect(result).to.equals(0);
    })
    it('should return the single element as a sum if a single element array is given', ()=>{
        //Arrange
        const inputArray = [1];
        //Act
        const result = sum(inputArray);
        //Assert
        expect(result).to.equals(1);
    })
    it('should return the totla sum of un array if a multi value array is given', ()=>{
        //Arrange
        const inputArray = [1, 2, 3];
        //Act
        const result = sum(inputArray);
        //Assert
        expect(result).to.equals(6);
    })
})
