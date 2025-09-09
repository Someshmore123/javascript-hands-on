arrayNumbers=[20,11,40,25,23,11,9,31,60,2,19];
console.log(`Given array is:${arrayNumbers}`);
console.log("==============================");

const arrays=arrayNumbers.map((element)=>{
     element=element+10;
        return element;
});
console.log(`Array after adding 10 to each element:${arrays}`);
console.log("==============================");

const cubeOfElement=arrayNumbers.map((element)=>{
        element=element**3;
        return element;
});
console.log(`Array after cube of each element:${cubeOfElement}`);
console.log("==============================");

let addIndexAndElement= arrayNumbers.map((element,index)=>{
    return element+index;
  } );

    console.log(`Adding index value to its corresponding element:${addIndexAndElement}`);
    
