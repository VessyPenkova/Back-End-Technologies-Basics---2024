function calcsum(startindex, endindex){
let sum = 0;
let str =''; 
for(let i = startindex; i<= endindex; i+=1){
 sum += i;
 str +=`${i} `;
}
console.log(str.trimEnd());
console.log(`Sum: ${sum}`);
}