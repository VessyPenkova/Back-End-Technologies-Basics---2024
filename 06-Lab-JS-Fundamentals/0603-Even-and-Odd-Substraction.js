function solve(inputArr){
    let evensum = 0;
    let oddsum = 0;
    for(let i = 0; i < inputArr.length; i++)
    {

      let current = Number(inputArr[i]);

      if(current % 2 == 0)
      {
       evensum += current;
      }
      else if(current % 2 !=  0)
      {

        oddsum += current;
      }
    }
    console.log(evensum-oddsum);
}

solve([1,2,3,4,5,6])