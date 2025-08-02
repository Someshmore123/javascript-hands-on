
console.log("---------------------------------Function Expression Assignment ---------------------------------");

console.log("--------------------------------- 1 ---------------------------------");

var square = function (num) {
    var sqr = num * num;
    return sqr;
};
var returnValue = square(5);
console.log(`square of 5 :${returnValue}`);
var returnValue = square(6);
console.log(`square of 6 :${returnValue}`);
var returnValue = square(25);
console.log(`square of 25 :${returnValue}`);
var returnValue = square(100);
console.log(`square of 100 :${returnValue}`);
var returnValue = square(67.89);
console.log(`square of 67.89 :${returnValue}`);
var returnValue = square(59);
console.log(`square of 59 :${returnValue}`);

console.log("--------------------------------- 2 ---------------------------------");

console.log(`The type of square is : ${typeof square}`);

console.log("--------------------------------- 3 ---------------------------------");

var areaOfRect = function (length, breadth) {
    var area = length * breadth;
    return area;
};
var returnValue = areaOfRect(499, 917);
console.log(`area of rectangle is : ${returnValue}`);

console.log("--------------------------------- 4 ---------------------------------");

var swapValues = function (value1, value2) {

    console.log(`before swapping values: ${value1},${value2}`);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log(`After swapping values: ${value1},${value2}`);


};
swapValues("mahi", "raina");
swapValues(55, 77);

console.log("--------------------------------- 5 ---------------------------------");


var stringOpr = function () {
    var str = "JS the most popular language of internet";
    console.log(`total characters available in string: ${str.length}`);

    console.log(`Character at index 6:${str.charAt(6)}`);


    console.log(`Character at index 11:${str.charAt(11)}`);


    console.log(`Last character: ${str.charAt(str.length - 1)}`);

    console.log(`First character:${str.charAt(0)}`);


    console.log(`Third last character:${str.charAt(str.length - 3)}`);

    var splitWords = str.split(" ");
    var totalWords = splitWords.length;
    console.log(`total words in string: ${totalWords}`);

    var square = totalWords * totalWords;
    // console.log(square);
    return square;
}
var returnValue = stringOpr();
console.log(`square of total number of words in string:${returnValue}`);