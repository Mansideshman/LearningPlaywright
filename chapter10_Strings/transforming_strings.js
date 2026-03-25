let str = "Hello World !";
console.log(str.toLowerCase());
console.log(str.toUpperCase());

//Trim whitespace

console.log(str.trim());
str.trimStart();
str.trimEnd();


//Replace

let msg = "Test:FAIL,Retry:FAIL.";
msg.replace("FAIL","PASS");
msg.replace(/FAIL/g,"PASS");   //replace all with Regex

//concatenation

"Hello" + " " + "World";
"Hello".concat(" ","World");
`${"Hello"} ${"world"}`;

let url = "https://app.vwo.com?q=app=pramod"
console.log(url.replace(/app/g,"qa"));

//splitting and joining
"pass,fail,skip".split(",");
"hello".split(""); //
"test_login_pass".join("_");
console.log(date);
