function rotateArray(arrayToRotate, numberToRotate){

    for(let i = 0; i< numberToRotate; i++){      
      let currentNumber = arrayToRotate.shift();
      arrayToRotate.push(currentNumber)
    }

    console.log(arrayToRotate.join(' '));
}

rotateArray([51, 47, 32, 61, 21], 2);