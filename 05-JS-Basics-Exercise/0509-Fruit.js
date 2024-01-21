function calculate (typeOFFruit, wheight, pricePerKg){
 'use strict';

 const pricePerGram = pricePerKg / 1000;
 const totalPrice = wheight * pricePerGram;

 console.log(`I need $${totalPrice.toFixed(2)} to buy ${(wheight / 1000).toFixed(2)} kilograms ${typeOFFruit}.`);
}