function factorialOfWordCount(str) {
    if(str===undefined || typeof str !== "string"){
        console.log(`given string ${str} is : invalid input and Unhappy Scenario`);  
        return null;  
    }
   let word= str.split(" ").length;
  
   let fact=1;
   for (let index = word; index>=1; index--) {
        fact=fact*index;
    
   }
   console.log(`total no of word in given string ${str} is : ${word} and its factorial is :${fact}`);
   return fact;

}
factorialOfWordCount("Revision is the Mother Of Success");
factorialOfWordCount("We never fail, we always run, Mind it");
factorialOfWordCount(null);
factorialOfWordCount("");
factorialOfWordCount("Somesh Dnyaneshwar More");



