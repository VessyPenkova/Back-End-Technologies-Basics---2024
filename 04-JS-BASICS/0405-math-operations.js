function solve(operantone, operanttwo, operator) {
 let result
 if (operator ==`+`){
    result = operantone+operanttwo;
 }
 else if(operator ==`-`){
    result = operantone-operanttwo;
 }
 else if(operator ==`*`){
    result = operantone*operanttwo;
 }
 else if(operator ==`/`){
    result = operantone/operanttwo;
 }
 else if(operator ==`%`){
    result = operantone%operanttwo;
 }
 else if(operator ==`**`){
    result = operantone**operanttwo;
 }
console.log(result);
 }
 solve(result);
