function vacationcalulate(groupCount, typeOfGroup,dayOftheWeek ){
let amount;
if(dayOftheWeek ==='Friday'){
    if(typeOfGroup ==='Students'){
      if(groupCount>=30){
         amount = groupCount*8.45 - groupCount*8.45/100*15;
      }
      else{
        amount = groupCount*8.45;
      }
    }
    else if(typeOfGroup ==='Business'){
        if(groupCount>=100)
        amount = groupCount*10.90 - groupCount*10.90/100*10;
        else{
            amount = groupCount*10.90;
          }
    }
    else if(typeOfGroup ==='Regular'){
        if(groupCount>=10 && groupCount<=20){
            amount = groupCount*15 - groupCount*15/100*5         
        }
        else{
            amount = groupCount*15;
        }
    }
}
else if(dayOftheWeek ==='Saturday'){
if(typeOfGroup ==='Students'){
    if(groupCount>=30){
        amount = groupCount*9.80 - groupCount*9.80/100*15;
     }
     else{
       amount = groupCount*9.80;
     }
    }
    else if(typeOfGroup ==='Business'){
        if(groupCount>=100)
        amount = groupCount*15.60 - groupCount*15.60/100*10;
        else{
            amount = groupCount*15.60;
          }
    }
    else if(typeOfGroup ==='Regular'){
        if(groupCount>=10 && groupCount<=20){
            amount = groupCount*20 - groupCount*20/100*5         
        }
        else{
            amount = groupCount*20;
        }
    }
}
else if(dayOftheWeek==='Sunday'){
if(typeOfGroup ==='Students'){
    if(groupCount>=30){
        amount = groupCount*10.46 - groupCount*10.46/100*15;
     }
     else{
       amount = groupCount*10.46;
     }
    }
    else if(typeOfGroup ==='Business'){
        if(groupCount>=100)
        amount = groupCount*16.00 - groupCount*16.00/100*10;
        else{
            amount = groupCount*16.00;
          }
    }
    else if(typeOfGroup ==='Regular'){
        if(groupCount>=10 && groupCount<=20){
            amount = groupCount*22.50 - groupCount*22.50/100*5         
        }
        else{
            amount = groupCount*22.50;
        }
    }
}
console.log(`Total price: ${amount.toFixed(2)}`);
}
 vacationcalulate(40, "Regular", "Saturday" )
