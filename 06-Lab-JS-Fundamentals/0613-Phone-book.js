function solve(inputArr){

   let uniqueNames = {};  
  
    inputArr.forEach(element => {
    let keyVealuePair = element.split(" ");
    let key = keyVealuePair[0];
    let value = keyVealuePair[1];

    uniqueNames[key]= value;

  });
  for(let key in uniqueNames){
    console.log(`${key} -> ${uniqueNames[key]}`);
  }
}