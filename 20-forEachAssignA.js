const arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601];
console.log("arrayNumbers =",arrayNumbers);

console.log("==========element with index number from arraynumbers===========");
arrayNumbers.forEach((value,index)=>{
console.log(index,":",value);

});

console.log("==========positive numbers===========");
arrayNumbers.forEach((value)=>{
if(value>0){
    console.log(value);

}});
console.log("==========negative numbers===========");
negativeNumbers = [];
arrayNumbers.forEach((value)=>{
if(value<0){
    negativeNumbers.push(value);
}}
);
console.log(negativeNumbers);

console.log("==========even numbers===========");
evenNumbers = [];
arrayNumbers.forEach((value)=>{
if(value%2==0){
    evenNumbers.push(value);
}}
);
console.log(evenNumbers);

console.log("==========sum of all elements===========");
let sum = 0;
arrayNumbers.forEach((value)=>{
    sum=sum+value;

}
);
console.log("sum of all element :",sum);
console.log("==========Even indexed values===========");
arrayNumbers.forEach((value, index)=>{
  if (index % 2 === 0) {
    console.log(`Index: ${index}, Value: ${value}`);
  }
});