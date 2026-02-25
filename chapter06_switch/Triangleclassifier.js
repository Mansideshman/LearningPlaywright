// ✅ Triangle Classifier:


// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, 
// determine if the triangle is equilateral (all sides are equal), i
// sosceles (exactly two sides are equal), or scalene (no sides are equal).
//  Use an if-else statement to classify the triangle.

let sidea = 20;
let sideb = 20;
let sidec =20;

if (sidea === sideb && sideb === sidec) {
    console.log("Triangle is equilateral");
} else if (sidea === sideb || sidea === sidec || sideb === sidec) {
    console.log("Triangle is Isoseles");
} else {
    console.log("Triangle is scalene");
}