//Sorting

// let fruits = ["banana","apple","cherry"];

// fruits.sort();
// console.log(fruits);


let numbers =[3,7,1,2,9]
numbers.sort();
console.log(numbers);


numbers.sort((a,b) =>a - b);  //ascending
console.log(numbers);


numbers.sort((a,b) =>b-a);//descending
console.log(numbers);