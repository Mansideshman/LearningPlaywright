const user = {
    name : "John",
    age : 30,
    email:"mansideshman@hmail.com"
};
console.log(user);


//Accessing properties
console.log(user.name);
console.log(user["age"]);


//Dynamic Property access

const key = "email";
console.log(user[key]);

//Adding/modifying proeprties

user.city = "NYC";
user.age = 31;
console.log(user);


