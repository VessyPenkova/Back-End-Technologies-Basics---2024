function listOfSortedNames(inputArr){
 let sortedArr = inputArr.sort();
 for(let i = 0; i < sortedArr.length; i++){

    console.log(`${i+1}.${sortedArr[i]}`);
 }
}
listOfSortedNames(["John", "Bob", "Christina", "Ema"]);