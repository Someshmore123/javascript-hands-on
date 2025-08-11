function factorialOfNum(num) {
  if (num === null || num=== undefined || num ===NaN) {
    console.log(` Given value ${num} is : invalid input , "Unhappy Scenario"`);  
    return null;
    }
  
    let fact=1;
    for(let i = num; i>=1; i--){
        fact=fact*i;
    }
        
    console.log(`the factorial of ${num} is : ${fact}`);  

   return fact;        
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);

