console.log("---------------------------------Function Assignment---------------------------------");
console.log("---------------------------------Task 01 :- function without parameter and return type---------------------------------");

function show() {
    console.log("I love javascript..");    
}
console.log("function 1 : show()");
show();

function greet() {
    console.log("Good Morning Everyone..!!!"); 
}
console.log("function 2 : greet()");
greet();

console.log("---------------------------------Task 02 :- function with parameters ---------------------------------");

function personalDetails(firstName, lastName, collegeName) {
    console.log(`My first name is : ${firstName}`);
    console.log(`My last name is : ${lastName}`);
    console.log(`My college name is : ${collegeName}`);
}


personalDetails("Somesh", "More", "Sharadchandra Pawar College Of Engineering And Technology");

console.log("---------------------------------Task 03 :- function with parameter and return type---------------------------------");

function addThreeValues(value1,value2,value3) {
    console.log(`the input is : ${value1},${value2},${value3}`);
    var result =value1+value2+value3;
    return result;
}
var returnValue=addThreeValues(10.23,600,40);
console.log(`the addition of values is:${returnValue}`);
var returnValue=addThreeValues("Hello","Good","Morning");
console.log(`the addition of string is:${returnValue}`);


