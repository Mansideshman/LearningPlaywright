let statuses =  [pass,Fail ,skip];
console.log(statuses[0]);
console.log(statuses[2]);


console.log(statuses.at[-1]); //last
console.log(statuses.at[-2]);//fail


//Modify


statuses[1] = "blocked";
console.log(statuses);


//length

console.length(statuses.length);