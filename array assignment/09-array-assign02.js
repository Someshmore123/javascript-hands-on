const array = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`Total element available in array: ${array.length}`);
console.log("--------------------------------------------------------");

console.log(`first element : ${array[0]}`);
console.log(`Last element : ${array[array.length - 1]}`);
console.log("--------------------------------------------------------");

console.log(`third Last element from arry : ${array[array.length - 3]}`);
console.log("--------------------------------------------------------");



let evenNum = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        evenNum.push(array[index]);
    }
}
console.log(`Even no from array : ${evenNum}`);
console.log("--------------------------------------------------------");


let oddnum = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 1) {
        oddnum.push(array[index]);
    }

}
console.log(`Odd no from array : ${oddnum}`);
console.log("--------------------------------------------------------");



let sumOfEvenNum = 0;
let evenNum1 = [];
for (let index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
        sumOfEvenNum = sumOfEvenNum + array[index];
    }

}

console.log(`the sum of even positioned array element : ${sumOfEvenNum}`);
console.log("--------------------------------------------------------");



let sumOfOddNum = 0;
let oddNum1 = [];
for (let index = 0; index < array.length; index++) {
    if (index % 2 == 1) {
        sumOfOddNum = sumOfOddNum + array[index];
    }

}

console.log(`the sum of even positioned array element : ${sumOfOddNum}`);
console.log("--------------------------------------------------------");


let sumOfElement = 0;
for (let i = 0; i < array.length; i++) {
    sumOfElement = array[i] + sumOfElement;
}
console.log(`Sum of all element from array : ${sumOfElement}`);

console.log("--------------------------------------------------------");

let multipleOf5 = [];
for (let index = 0; index < array.length; index++) {
    if (array[index] % 5 == 0) {
        multipleOf5.push(array[index]);
    }

}
console.log(`Element that are multiple by 5 : ${multipleOf5}`);
console.log("--------------------------------------------------------");

console.log(`is 115 is available ? : ${array.includes(115)}`);
console.log("--------------------------------------------------------");

console.log(`is 23 is available ? : ${array.includes(23)}`);
console.log("--------------------------------------------------------");

array.splice(3, 0, 55, 66);
console.log(`Inserting number 55 and 66 at index 3 : ${array}`);
console.log("--------------------------------------------------------");

array.splice(4, 3);
console.log(`Deleting 3 elements starting from index 4 : ${array}`);
