function SpeedChecker(speed, place){
    'use strict'

    let speedLimit = 0;
    let status = '';
    if(place ==='motorway'){
    speedLimit = 130
  }
    else if(place ==='interstate'){
    speedLimit = 90;
  }
    else if(place ==='city'){
    speedLimit = 50;
  } 
    else if(place ==='residential'){
    speedLimit = 20;
  }

   const speedLimitDifference = speed - speedLimit;

   if(speedLimitDifference <=0 ){
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
   }
   else if(speedLimitDifference > 0  && speedLimitDifference <= 20){
    status = 'speeding';
    console.log(`The speed is ${speedLimitDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
   }
   else if(speedLimitDifference > 20 && speedLimitDifference <= 40){
    status ='excessive speeding';
    console.log(`The speed is ${speedLimitDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
   } 
   else{
    status = 'reckless driving';
   console.log(`The speed is ${speedLimitDifference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
   }
}

SpeedChecker(200, 'motorway');