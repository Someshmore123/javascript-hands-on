const message = ()=>{
    console.log("Good Morning, Today is Friday");
    
};
message();

let multiply=(val1,val2,val3)=>{
    console.log(`Multiplication of ${val1},${val2},${val3} : ${val1*val2*val3}`);

};
multiply(5,5,2);

let multiply1=(val1,val2,val3=1)=>{
    console.log(`Multiplication of ${val1},${val2},${val3} : ${val1*val2*val3}`);

};
multiply1(10,4);

let add=(p1,p2,p3,p4,p5)=>{
    let result = p1+p2+p3+p4+p5;
    return result;
};
let returnValue = add(100,100,200,349,756);
console.log(`Addition is : ${returnValue}`);

let str=(str1,str2,str3,str4,str5)=>{
   let result1=str1+str2+str3+str4+str5;
   return result1
}
let resultvalue1=str("I am ","learning ","ES6 ","features ","in depth");
console.log(`Addition of words is : ${resultvalue1}`);
