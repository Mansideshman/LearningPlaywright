//Strings

let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;   //template literal

//single quotes
let a = 'hello';

//double quotes
let b = "world";

//Template literals(backticks) -allows expressions and multiline


let name1 = "Alice";
let msg = `Hello ,${name1} 2 + 2 =${2+2}`;
console.log(msg);


//multiline

let report = `
Test:login 
Status:Pass
Duration:320ms`;


//string constructors (convert other strings)

console.log(String(200));
String(true);//true
String(null); //null
String([1,2]); //[1,2]