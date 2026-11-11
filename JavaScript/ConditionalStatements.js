let num=10;
if(num>0){
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}


// if-else statement
let n=2;
if(n%2==0){
    console.log("Number is even");
}
else{
    console.log("Number is odd");
}

//if-else-if statement
let marks=85;
if(marks>=90){
    console.log("Grade: A");
}   
else if(marks>=80){
    console.log("Grade: B");
}   
else if(marks>=70){
    console.log("Grade: C");
}
else if(marks>=60){
    console.log("Grade: D");
}   
else{
    console.log("Grade: F");
}


//switch statement
let day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;      
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;      
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}