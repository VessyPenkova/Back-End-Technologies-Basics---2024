function copyNthStepInNewArrayAndPrintNewArray(intputArr, step){
 let newArr = [];
 for(let i = 0; i<intputArr.length; i+=step){
   let currentNumber = intputArr[i];
   newArr.push(currentNumber);
 }
 return newArr;
}
copyNthStepInNewArrayAndPrintNewArray(['5', '20', '31', '4', '20'], 2
);