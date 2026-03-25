// What is an Object in JavaScript?
// An object is a collection of key-value pairs used to store related data and functionality together.
//Objects can store any data type as a value — strings, numbers, arrays, functions, even other objects!

const person = {
  name: 'Alice',      // key: value
  age: 25,
  isStudent: true
};

//How to Access Object Properties?
//There are two ways to access properties — dot notation and bracket notation:

const person = { name: 'Alice', age: 25 };

// Dot notation
console.log(person.name);  // 'Alice'

// Bracket notation
console.log(person['age']); // 25

//How to Add and Delete Properties?

// ✅ Adding properties
person.age = 25;               // dot notation
person['email'] = 'a@b.com';  // bracket notation
console.log(person);
// { name: 'Alice', age: 25, email: 'a@b.com' }

// ✅ Deleting properties
delete person.email;
console.log(person);
// { name: 'Alice', age: 25 }


//How to Check if a Property Exists?

// 1. 'in' operator ✅ (recommended)
console.log('name' in person);      // true
console.log('email' in person);     // false

// 2. hasOwnProperty() ✅
console.log(person.hasOwnProperty('name'));  // true
console.log(person.hasOwnProperty('email')); // false

//What is Object.keys()?
//Returns an array of all property names (keys):

const person = { name: 'Alice', age: 25, city: 'NY' };

console.log(Object.keys(person));
// ['name', 'age', 'city']

// Useful for counting properties
console.log(Object.keys(person).length); // 3

//What is Object.values()?
//Returns an array of all property values:

const person = { name: 'Alice', age: 25, city: 'NY' };

console.log(Object.values(person));
// ['Alice', 25, 'NY']

// Useful for summing values
const scores = { math: 90, english: 85, science: 92 };
const total = Object.values(scores).reduce((a, b) => a + b, 0);
console.log(total); // 267


//What is Object.entries()?
//Returns an array of [key, value] pairs:

const person = { name: 'Alice', age: 25 };

console.log(Object.entries(person));
// [['name', 'Alice'], ['age', 25]]

// Great for destructuring
for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
// name: Alice
// age: 25'


//How to Loop Through an Object?

const person = { name: 'Alice', age: 25, city: 'NY' };

// 1. for...in (loops over keys)
for (const key in person) {
  console.log(key, person[key]);
}
// name Alice, age 25, city NY

// 2. Object.keys() + forEach
Object.keys(person).forEach(key => {
  console.log(key, person[key]);
});

// 3. Object.values() (when you only need values)
Object.values(person).forEach(value => {
  console.log(value);
});
// Alice, 25, NY

// 4. Object.entries() (best for key + value together)
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});


// which loop to use
//for...in   simple key iteration
//Object.keys()  need keys as an array
//Object.values()   nmeed values as an array
//Object.entries()    need both keys and values


//Cheatsheet:
//const obj = { name: 'Alice', age: 25 };

//obj.name              // Access → 'Alice'
//obj['age']            // Access → 25
//obj.email = 'a@b.com' // Add property
//delete obj.email      // Delete property
//'name' in obj         // Check exists → true
//Object.keys(obj)      // ['name', 'age']
//Object.values(obj)    // ['Alice', 25]
//Object.entries(obj)   // [['name','Alice'],['age',25]]