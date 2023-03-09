//defining map which will contain months and array of individuals  with birth in specific month
let mapformonth= new Map();
for(let i=1;i<=50;i++)
{
    //getting month by math.random function
    let month= Math.floor(Math.random()*12)%12+1;
    if(!mapformonth.has(month))
    {
        var arrayForElements= new Array();
        arrayForElements.push(i);
        mapformonth.set(month,arrayForElements);
    }
    else
    {
        arrayForElements= mapformonth.get(month);
        arrayForElements.push(i);
        mapformonth.set(month,arrayForElements);
    }

}
//printing map
console.log(mapformonth);
for(let key of mapformonth.keys())
{
    let array1= mapformonth.get(key);
    let noOfElements= array1.length;
    console.log(key +"->"+noOfElements);
}
//total persons in each month by foreach method
console.log("foreach method");
mapformonth.forEach((value,key)=>
console.log(key+"->"+value.length));