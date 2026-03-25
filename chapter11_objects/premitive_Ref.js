//Premitive data types - call by value
//premitive,number,string,booleam,null,undefined

// let a = 10;
// let b= a;
// b=99;
// console.log(a);

//Objects -copied by Reference ,call by ref
//Reference - object,array ,function

let obj1 = {val:10};
let obj2 = obj1;
obj2.val = 99;
console.log(obj1.val);
