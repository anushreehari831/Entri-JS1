/*//Global Scope
let a=2;
let b=3;
function addition(){
    let sum=a+b;
    console.log("sum:", sum);
}
addition();
console.log("number:", a);   

//Function Scope
function subtraction(){
    let diff='test function scope variable';
    console.log("inside function:", diff);}
subtraction();
console.log("outside function:", diff);  //ReferenceError: diff is not defined
*/
//Block Scope
if(true){
    let x=10;
    console.log("inside block:", x);
}
console.log("outside block:", x);  //ReferenceError: x is not defined