//checking arrays


//check if something is an arrat

// let result = Array.isArray([1,2,3]);
// let result1 = Array.isArray("a");
// console.log(result);
// console.log(result1);


// ///every & some

// let r = [80,90,95].every(s=> s >= 70);
// console.log(r);


//some - at least one must pass

[80,60,85].some(s=>s<70);  //true
[80,90,85].some(s => s<70);  //false 



let results = ["pass","fail","pass"];
let counts = results.reduce((acc,r) =>
{
    acc[r] =(acc[r] || 0) +1;
    return acc;
},{});
console.log(counts.pass);


