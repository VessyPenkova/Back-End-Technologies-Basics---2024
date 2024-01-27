import { createCalculator } from './0804-Add-Subtract.js'
import { expect } from 'chai'


describe ('The Function createCalculator true positive tests', () => {

    it('should retrn zero if no operations are excuted with the calculator', ()=> {
            //Arrange
            const calculator = createCalculator();  
            //Act
            const result = calculator.get();
            //Assert
            expect(result).equals(0);
      })
    
      it('should retrn negative number if only substract operations are executed with negative numbers the calculator', ()=> {
            //Arrange
            const calculator = createCalculator();    
            //Act
            calculator.subtract(3);
            calculator.subtract(3);
            calculator.subtract(3);
            const negativeResult = calculator.get();
            //Assert
            expect(negativeResult).equals(-9);
  })
      it('should retrun positive number if only add operations are executed with positive value the calculator', ()=> {
            //Arrange
            const calculator = createCalculator();             
            //Act
            calculator.add(3);
            calculator.add(3);
            calculator.add(3);
            const positiveResult = calculator.get();
            //Assert
            expect(positiveResult).equals(9);
      })
      it('should handle number as string values', ()=> {
            //Arrange
            const calculator = createCalculator();         
            //Act
            calculator.add('3');
            calculator.add('3');
            calculator.subtract('3');
            calculator.subtract('3');
            const positiveResultFromStringNumberic = calculator.get();
            //Assert
            expect(positiveResultFromStringNumberic).equals(0);
      })
      it('should handle mix of operatins', ()=> {
            //Arrange
            const calculator = createCalculator();         
            //Act
            calculator.add('3');
            calculator.subtract('3');
            calculator.add('3');
            calculator.subtract(3);
            calculator.add(3);

            const positiveMixedOperations = calculator.get();
            //Assert
            expect(positiveMixedOperations).equals(3);
      })
})



