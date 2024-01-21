function solve(typeoftheday, age){
    'use strict' ;
   if(age >=0 && age <=18){
     if(typeoftheday ==='Weekday'){
       console.log('12$');
     }
     else if(typeoftheday ==='Weekend'){
        console.log('15$');
     }
     else if(typeoftheday ==='Holiday'){
        console.log('5$');
     }

   }
   else if(age > 18 && age <=65){
    if(typeoftheday ==='Weekday'){
        console.log('18$');
      }
      else if(typeoftheday ==='Weekend'){
         console.log('20$');
      }
      else if(typeoftheday ==='Holiday'){
         console.log('12$');
      }
   }
   else if(age > 64 && age <= 122){
    if(typeoftheday ==='Weekday'){
        console.log('12$');
      }
      else if(typeoftheday ==='Weekend'){
         console.log('15$');
      }
      else if(typeoftheday ==='Holiday'){
         console.log('10$');
      }
   }
   else{
      console.log('Error!');
   }
}

solve('Holiday', -12);