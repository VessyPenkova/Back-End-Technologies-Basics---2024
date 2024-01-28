import {mathEnforcer} from './0903-Math-Enforcer.js'
import {expect} from 'chai'

describe ('0903 Prob. the function mathEnforcer', () => {

   describe ('090301 function Addfive', ()=> {
        it('should return undefined when string is passed', () => {
            //Arrange
            const stringInput = "something";
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when undefined is passed', () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.addFive(undefinedInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when number is passed as sting', () => {
            //Arrange
            const stringInput = "5";
            //Act
            const undefinedResult = mathEnforcer.addFive(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return correct reslut  when pass floating number as input with closeto', () => {
            //Arrange
            const floatingInput = 1.01;
            //Act
            const currectResult = mathEnforcer.addFive(floatingInput);
            //Assert
            expect(currectResult).to.be.closeTo(6.01, 0.01);
        })
        it('should return correct reslut  when pass floating number as input with closeto', () => {
            //Arrange
            const floatingInput = 1.000000001;
            //Act
            const currectResult = mathEnforcer.addFive(floatingInput);
            //Assert
            expect(currectResult).to.be.closeTo(6.01, 0.01);
        })
        it('should return correct reslut  when pass floating number as input without closeto', () => {
            //Arrange
            const floatingInput = 1.01;
            //Act
            const currectResult = mathEnforcer.addFive(floatingInput);
            //Assert
            expect(currectResult).equals(6.01);
        })
        it('should return correct reslut  when pass number as input without closeto', () => {
            //Arrange
            const numberInput = 5;
            //Act
            const currectResult = mathEnforcer.addFive(numberInput);
            //Assert
            expect(currectResult).equals(10);
        })
        it('should return correct reslut  when pass negative number as input without closeto', () => {
            //Arrange
            const negativeInput = -15;
            //Act
            const currectResult = mathEnforcer.addFive(negativeInput);
            //Assert
            expect(currectResult).equals(-10);
        })
        it('should return correct reslut  when pass negative number as input without closeto', () => {
            //Arrange
            const negativeInput = -5;
            //Act
            const currectResult = mathEnforcer.addFive(negativeInput);
            //Assert
            expect(currectResult).equals(0);
        })
     
   })

    describe ('090302 function subtractTen', ()=> {
        it('should return undefined when string is passed', () => {
            //Arrange
            const stringInput = "something";
            //Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when undefined is passed', () => {
            //Arrange
            const undefinedInput = undefined;
            //Act
            const undefinedResult = mathEnforcer.subtractTen(undefinedInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when number is passed as sting', () => {
            //Arrange
            const stringInput = "5";
            //Act
            const undefinedResult = mathEnforcer.subtractTen(stringInput);
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return correct reslut when pass floating number as input with closeto', () => {
            //Arrange
            const floatingInput = 1.01;
            //Act
            const currectResult = mathEnforcer.subtractTen(floatingInput);
            //Assert
            expect(currectResult).to.be.closeTo(-8.99, 0.01);
        })
        it('should return correct reslut  when pass floating number as input with closeto', () => {
            //Arrange
            const floatingInput = 1.000000001;
            //Act
            const currectResult = mathEnforcer.subtractTen(floatingInput);
            //Assert
            expect(currectResult).to.be.closeTo(-8.99, 0.01);
        })
        it('should return correct reslut  when pass floating number as input without closeto', () => {
            //Arrange
            const floatingInput = 1.01;
            //Act
            const currectResult = mathEnforcer.subtractTen(floatingInput);
            //Assert
            expect(currectResult).equals(-8.99);
        })
        it('should return correct reslut  when pass number as input without closeto', () => {
            //Arrange
            const numberInput = 5;
            //Act
            const currectResult = mathEnforcer.subtractTen(numberInput);
            //Assert
            expect(currectResult).equals(-5);
        })
        it('should return correct reslut  when pass negative number as input without closeto', () => {
            //Arrange
            const negativeInput = -15;
            //Act
            const currectResult = mathEnforcer.subtractTen(negativeInput);
            //Assert
            expect(currectResult).equals(-25);
        })
        it('should return correct reslut  when pass negative number as input without closeto', () => {
            //Arrange
            const negativeInput = 10;
            //Act
            const currectResult = mathEnforcer.subtractTen(negativeInput);
            //Assert
            expect(currectResult).equals(0);
        })
    })

   describe ('090303 function sum', ()=> {
        it('should return undefined when Param1: incorrect and Param2: corect ', () => {
            //Arrange
            const incorectFirstParam = "something";
            const corectSecondParam = 5;
            //Act
            const undefinedResult = mathEnforcer.sum(incorectFirstParam, corectSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when Param1: correct and Param2: incorect ', () => {
            //Arrange
            const corectFirstParam = 5;
            const incorectSecondParam = "something";
            //Act
            const undefinedResult = mathEnforcer.sum(corectFirstParam, incorectSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when Param1: incorrect and Param2: incorect ', () => {
            //Arrange
            const inorectFirstParam = "somting";
            const incorectSecondParam = "something";
            //Act
            const undefinedResult = mathEnforcer.sum(inorectFirstParam, incorectSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return undefined when Param1: number as astring and Param2: corect ', () => {
            //Arrange
            const numberAsStringFirstParam = "5";
            const corectSecondParam = 5;
            //Act
            const undefinedResult = mathEnforcer.sum(numberAsStringFirstParam, corectSecondParam)
            //Assert
            expect(undefinedResult).to.be.undefined;
        })
        it('should return correct result when Param1: correct and Param2: corect ', () => {
            //Arrange
            const corectFirstParam= 5;
            const corectSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(corectFirstParam, corectSecondParam)
            //Assert
            expect(correctResult).equals(10);
        })
        it('should return correct result when Param1: negative num and Param2: negative num ', () => {
            //Arrange
            const negativeFirstParam = -5;
            const negativeSecondParam = -5;
            //Act
            const correctResult = mathEnforcer.sum(negativeFirstParam, negativeSecondParam)
            //Assert
            expect(correctResult).equals(-10);
        })
        it('should return correct result when Param1: negative num and Param2: positive num ', () => {
            //Arrange
            const negativeFirstParam = -5;
            const positiveSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(negativeFirstParam, positiveSecondParam)
            //Assert
            expect(correctResult).equals(0);
        })
        it('should return correct result when Param1: floating num and Param2: positive num ', () => {
            //Arrange
            const floatngFirstParam = 5.01;
            const positiveSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(floatngFirstParam, positiveSecondParam)
            //Assert
            expect(correctResult).equals(10.01);
        })
        it('should return correct result when Param1: floating num and Param2: positive num useing closeto', () => {
            //Arrange
            const floatngFirstParam = 5.01;
            const positiveSecondParam = 5;
            //Act
            const correctResult = mathEnforcer.sum(floatngFirstParam, positiveSecondParam)
            //Assert
            expect(correctResult).to.be.closeTo(10.01, 0.01);
        })
   })

})