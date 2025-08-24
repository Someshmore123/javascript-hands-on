const fruits =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits);
console.log(`first element : ${fruits[0]}`);
console.log(`last element : ${fruits[fruits.length-1]}`);
console.log("------------------------------------------------------------");

fruits.unshift("Papaya");
console.log(`Adding Papaya at first : ${fruits}`);
console.log("------------------------------------------------------------");

fruits.splice(4,1);
console.log(`Removing Mango from fruits : ${fruits}`);
console.log("------------------------------------------------------------");

fruits.push("Pineapple");
console.log(`Adding element Pineapple at last position : ${fruits}`);
console.log("------------------------------------------------------------");

fruits.splice(4,0,"Dragon fruit");
console.log(`Inserting "Dragon fruit" before "water melon" : ${fruits}`);
console.log("------------------------------------------------------------");

fruits.splice(2,1,"Kiwi");
console.log(`Replacing "Orange" With "Kiwi" : ${fruits}`);
console.log("------------------------------------------------------------");

const slicedfruits=fruits.slice(1,4);
console.log(`Element starting from index 1 to 4: ${slicedfruits}`);
console.log("------------------------------------------------------------");

const slicedfruits2=fruits.slice(fruits.length-3);
console.log(`Last three elements from array: ${slicedfruits2}`);



