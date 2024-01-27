import { isSymmetric } from './0802-Check-Symmetry.js'
import { expect} from 'chai';


describe('The function isSymmetric', ()=>{
    it('should return true if un empty array is given', ()=>{
        //Arrange
        const inputArray = [];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
    })
    it('should return false if a non-array is given', ()=>{
        //Arrange
        const inputArray = 1;
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
    })
    it('should return false if a non-symetric array is given', ()=>{
        //Arrange
        const inputArray = [1, 2, 3, 4, 5];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
    })
    it('should return true if a symetric array is given', ()=>{
        //Arrange
        const inputArray = [1, 2, 3, 2, 1];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.true;
    })
    it('should return false if a looks likesymetric array, but with different type is given', ()=>{
        //Arrange
        const inputArray = [1, 2, 3, '2', 1];
        //Act
        const result = isSymmetric(inputArray);
        //Assert
        expect(result).to.be.false;
    })
})
