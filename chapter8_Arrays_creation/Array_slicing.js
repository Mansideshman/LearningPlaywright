// //slicing  & combining

// let arr = [1,2,3,4,5];

// //slice (start,end)-returns new array ,does not mutate actual ->(start,end-1),index = 0

// console.log(arr.slice(1,3)); //2 3

// console.log(arr.slice(-2)); //4 5


// console.log(arr.slice(2,4));  //3 4 5

// console.log(arr.slice(0));  // 1 2 3 4 5 
// console.log(arr.slice(-5));  //1 2 3 4 5 


//concatination

let arr1= [1,2,3,4,5];

let a = [1,2];
let b = [3,4];
//let c = a.concat(b);
//console.log(c);
let c = a.concat(b,[5,6]);

//let c = a.concat(b);
console.log(c);

// //spread(modern way)   -concatination (...)

 let d= [...a,...b];
console.log(d);


//join

let s = ["pass","Fail","skip"].join("|");
console.log(s);






