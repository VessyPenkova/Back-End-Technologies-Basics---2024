function cookigByNumbers(stratingPoint, firstOperation,secondOperation, thirdOperation, fortOparation, fifthOperation){
 
    'use strict';

    let num = parseInt(stratingPoint, 10);
  
    let result = 0;

    if(firstOperation ==='chop'){
        num = num / 2;
    }
    else if(firstOperation ==='dice'){
        num = Math.sqrt(num);
    }
    else if(firstOperation ==='spice'){
        num +=1;
    }
    else if(firstOperation ==='bake'){
        num = num * 3;
    }
    else if(firstOperation ==='fillet'){
        num = (num *0.8).toFixed(2) ;
    }

    console.log(num); 

    if(secondOperation ==='chop'){
        num = num / 2;
     }
     else if(secondOperation ==='dice'){
        num = Math.sqrt(num);
     }
     else if(secondOperation ==='spice'){
        num +=1;
     }
     else if(secondOperation ==='bake'){
        num = num * 3;
     }
     else if(secondOperation ==='fillet'){
        num = (num *0.8).toFixed(2) ;
     }
    
     console.log(num); 

     if(thirdOperation ==='chop'){
        num = num / 2;
     }
     else if(thirdOperation ==='dice'){
        num = Math.sqrt(num);
     }
     else if(thirdOperation ==='spice'){
        num +=1;
     }
     else if(thirdOperation ==='bake'){
        num = num * 3;
     }
     else if(thirdOperation ==='fillet'){
        num = (num *0.8).toFixed(2) ;
     }


     console.log(num); 

     if(fortOparation ==='chop'){
        num = num / 2;
     }
     else if(fortOparation ==='dice'){
        num = Math.sqrt(num);
     }
     else if(fortOparation ==='spice'){
        num +=1;
     }
     else if(fortOparation ==='bake'){
        num = num * 3;
     }
     else if(fortOparation ==='fillet'){
        num = (num *0.8).toFixed(2) ;
     }

     console.log(num); 
     if(fifthOperation ==='chop'){
        num = num / 2;
     }
     else if(fifthOperation ==='dice'){
        num = Math.sqrt(num);
     }
     else if(fifthOperation ==='spice'){
        num +=1;
     }
     else if(fifthOperation ==='bake'){
        num = num * 3;
     }
     else if(fifthOperation ==='fillet'){
        num = (num *0.8).toFixed(2) ;
     }

    console.log(num); 
}

cookigByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');