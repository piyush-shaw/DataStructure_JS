//defining the map for number 
let diceMap= new Map();
//defining variable of count for each number
let oneCount=0;
let twoCount=0;
let threeCount=0;
let fourCount=0;
let fiveCount=0;
let sixCount=0;
while(oneCount<10 && twoCount<10 && threeCount<10 && fourCount <10 && fiveCount<10 && sixCount<10)
{
//rolling the dice multiple times using math.random 
let rollingADice= Math.floor(Math.random()*12)%6+1;
switch(rollingADice)
{
    case 1:
        oneCount++;
        diceMap.set(rollingADice,oneCount);
        break;
    case 2:
        twoCount++;
        diceMap.set(rollingADice,twoCount);
        break;
    case 3:
        threeCount++;
        diceMap.set(rollingADice,threeCount);
        break;
    case 4:
        fourCount++;
        diceMap.set(rollingADice,fourCount);
        break;
    case 5:
        fiveCount++;
        diceMap.set(rollingADice,fiveCount);
        break;
    case 6:
        sixCount++;
        diceMap.set(rollingADice,sixCount);
        break;
    default:
        break;

}
}
//printing map
console.log(diceMap);
//printing max value from map
let minValue= Math.min(...diceMap.values())
//for getting key of max and min value
console.log( diceMap.forEach(function(value,key)
{
  if(value==minValue)
  {
      console.log("Minimum");
      console.log("Key: "+ key+"  Value: "+value);
  }   
}) );
let maxValue= Math.max(...diceMap.values());
console.log( diceMap.forEach(function(value,key)
{
  if(value==maxValue)
  {
      console.log("Maximum")
      console.log("Key: "+ key+"  Value: "+value)
  }   
}) );