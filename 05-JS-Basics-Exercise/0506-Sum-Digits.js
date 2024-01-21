function calculateingredients(number){
    const numberToString = number.toString();
    let sum= 0;

    for(const char of numberToString){
      const charAsNumber = parseInt(char, 10);
      sum+= charAsNumber;
    }
    console.log(sum);
}
calculateingredients(543);