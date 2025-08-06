console.log("----------------------------- 1 -----------------------------");

function ifElse(val) {
  var result = val % 2 == 0;
  if (result) {
    console.log(`the ${val} is EVEN`);
  } else {
    console.log(`the ${val} is ODD`);
  }
}
ifElse(45);
ifElse(70);
ifElse(67);
ifElse(98);

console.log("----------------------------- 2 -----------------------------");

function vote(age) {
  var result = age >= 18;
  if (result) {
    console.log(`${age}yrs old person is eligible for vote..`);
  } else {
    console.log(`${age}yrs old person is not eligible for vote..`);
  }
}
vote(18);
vote(20);
vote(17);
vote(40);

console.log("----------------------------- 3 -----------------------------");

function charMoreThanTen(str) {
  var result = str.length > 10;
  if (result) {
    console.log(`${str} this string have more than 10 characters.`);
  } else {
    console.log(`${str}this string have less than 10 characters.`);
  }
}
charMoreThanTen("JavaScript-ES6");


console.log("----------------------------- 4 -----------------------------");

function java(str) {
  var result = str.startsWith("Java");
  if (result) {
    console.log(`${str} starts with java.`);
  } else {
    console.log(`${str} does not starts with java.`);
  }
}
java("JavaScript Language");
java("Programming Language");
