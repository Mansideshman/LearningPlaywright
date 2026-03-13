const greet = function(name1)
{
    return `Hello + ${name1}!`;

}

//If you want to make a normal function to arrow function
//Remove the keyword function,remove the keyword return,remove the curly braces and use the equal to arrow.

const greet1 = (name2) => `Hello , ${name2}!`;

console.log(greet("pranjal"));
console.log(greet1("pranjal1"));

//zero functions only generally works whenever you have a single line


const doubleIt = n => n*2;
console.log(doubleIt(10));

//no params -parens required


const getEnv = () => "staging";
console.log(getEnv());


//suppose we have a multi-line.can we use arrow function everywhere?
//Multi-line -needs curly braces + return


const getResult = (score) =>
{
    if(score >= 70) return "pass";
    return "Fail";
};


//zero functions only generally works whenever you have a single line.

const doubleIt = n => n*2;
console.log(doubleIt(10));