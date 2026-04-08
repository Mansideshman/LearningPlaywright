// class Student{
//     static collegeName = "PW at batch";
//     constructor(name)
//     {
//         this.name = name;
//     }
//     static display()
//     {
//         console.log("You are part of the",Student.collegeName)

//     }
// }

// let amit = new Student("amit");
// let mitiza = new Student("mitiza");
// let sumu = new Student("sumu");


// console.log(Student.collegeName);
// console.log(amit.name);

// Student.display();


class Student {
  constructor(name) {
    this.name = name;
  }

  static display() {
    console.log("You are part of the", Student.collegeName);
  }
}

let amit = new Student("amit");
let mitiza = new Student("mitiza");
let sumu = new Student("sumu");

console.log(Student.collegeName);
console.log(amit.name);


Static Student.collegeName = "PW at batch";
Student.display();