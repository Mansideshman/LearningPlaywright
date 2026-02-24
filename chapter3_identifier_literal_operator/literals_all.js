let count=42;
let negative = -42;
let decimal = 3.14;
let exponential = 1.5e6; // equivalent to 1.5 * 10^6

let zero = 0;
let h = 0x11;
let binary = 0b1010; // equivalent to 10 in decimal
let octal = 0o17; // equivalent to 15 in decimal

let bigInt = 1234567890123456789012345678901234567890n; // BigInt literal

let infinity = Infinity;
let negativeInfinity = -Infinity;
let notANumber = NaN;               
//let million = 1_000_000; // numeric literal with underscores for readability
//let tiny=0.000_001; // numeric literal with underscores for readability
//let tiny=2e-6; // equivalent to 0.000002



let single = 'Hello';
let double='Hi  my name is "Mansi"';
let doublequote = "She said Hello";



let templateLiteral = `This is a template literal with embedded expression: ${2 + 3}`;

let name = "Mansi";
let greeting = `Hello, ${name}!`; // Template literal with embedded expression

let firstName = "Mansi";
let lastName = "Deshman";
let fullName = `${firstName} ${lastName}`; // Template literal with multiple embedded expressions



let multiLine = `This is a
multi-line
string literal.`;

let escaped = 'This is a string with a newline character.\nAnd this is on a new line.';

let unicode = '\u0041'; // Unicode escape sequence for 'A'                              


let math =`2+2=${2+2}`; // Template literal with embedded expression
console.log(math); // Output: 2+2=4

//store the path of the file

let path = `C:\\Users\\Mansi\\Documents\\file.txt`; // Using double backslashes to escape the backslash character
console.log(path); // Output: C:\Users\Mansi\Documents\file.txt

let address = "https://www.example.com/path?query=string#fragment"; // String literal representing a URL
console.log(address); // Output: https:///www.example.com//path?query=string#fragment