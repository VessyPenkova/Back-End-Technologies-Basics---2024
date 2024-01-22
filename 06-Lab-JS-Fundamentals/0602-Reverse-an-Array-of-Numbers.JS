function reverse(n, inputArr){

 let reverseArray = [];

 for(let i = 0;i <n ;i++)
 {
  reverseArray.unshift(inputArr[i]);
 }

 console.log(reverseArray.join(" "));
}
reverse(3, [10,20,30,40,50])