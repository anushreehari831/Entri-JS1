// Comparison Operators

let a = 20;
let b = 10;

console.log("Equal:", a == b);

console.log("Strict Equal:", a === b);

console.log("Not Equal:", a != b);

console.log("Greater Than:", a > b);

console.log("Less Than:", a < b);

console.log("Greater Than or Equal:", a >= b);

console.log("Less Than or Equal:", a <= b);
// Logical AND Operator

let age = 25;
let hasID = true;

let result = age >= 18 && hasID == true;

console.log("Eligible for Entry:", result);

// Logical OR Operator

let haID = false;
let hasAdmitCard = true;

let res = hasID || hasAdmitCard;

console.log("Allowed for Exam:", res);

// Logical NOT Operator

let isLoggedIn = true;

console.log("Original Value:", isLoggedIn);

console.log("After NOT:", !isLoggedIn);

// Ternary Operator

let age1 = 20;

let result1 = age1 >= 18
    ? "Eligible for Voting"
    : "Not Eligible for Voting";

console.log(result1);

let num = 10;

if (num > 0) {
    console.log("Number is positive");
}