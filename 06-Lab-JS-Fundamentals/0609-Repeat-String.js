function repeatString(stringToRepeat, numberToRepeat){
  let repeatedString = "";

  for(let i = 0; i < numberToRepeat; i++){
    repeatedString+= stringToRepeat;
  }

  return repeatedString;
}