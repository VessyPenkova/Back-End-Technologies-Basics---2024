function solve(input){
    let inputype = typeof(input)
    if(inputype === "number"){
       result = Math.pow(input, 2)*Math.PI;
       console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we received a ${inputype}.`);
    }
}

solve('name');