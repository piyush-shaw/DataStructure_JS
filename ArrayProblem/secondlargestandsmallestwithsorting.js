let numArray = [];
for (var i = 0; i < 10; i++) {
    numArray.push(Math.floor(Math.random() * 900 + 100));
}
console.log("Input numbers : "+numArray);
numArray.sort();
console.log("Sorted numbers array : "+numArray);

console.log("Second Smallest element : " + numArray[1]);
console.log("Second largest element : " + numArray[8]);