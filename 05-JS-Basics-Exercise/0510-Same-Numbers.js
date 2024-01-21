function checkIfallNumbersEqulas(number){
    'use strict';

    let totalsum= 0;
    let allDigitAreTheSame = true;

    const firstDigit = number % 10;

    while(number > 0){
        const currentDigit = number % 10;

        if(firstDigit != currentDigit){
            allDigitAreTheSame = false;
        }
        totalsum += currentDigit;
        number = Math.floor(number / 10);
    }
    console.log(allDigitAreTheSame);
    console.log(totalsum);
}
checkIfallNumbersEqulas(222222);
