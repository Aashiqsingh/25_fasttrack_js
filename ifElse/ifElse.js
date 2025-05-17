// var age = 17;


// if(age > 18)
// {
//     console.log("You are eligible for vote..");
    
// }
// else{
//     console.log("You are not eligible for vote...");
    
// }


var a = 16;
var b = 17;
var c = 18;

// if(a > b)
// {
//     if(a > c)
//     {
//         console.log("A is gretter");
        
//     }
//     else{
//         console.log("C is gretter");
        
//     }
// }
// else{
//     if(b > c)
//     {
//         console.log("B is gretter");
        
//     }
//     else{
//         console.log("C is gretter");
        
//     }
// }


// if(a > b && a > c)
// {
//     console.log("A is gretter");
    
// }
// else if(b > a && b > c)
// {
//     console.log("b is gretter");
    
// }
// else{
//     console.log("C is gretter");
    
// }

let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
let c = parseInt(prompt("Enter third number"));

var sum = 0;

if(a > 35)
{
    sum += a;
}
if(b > 35)
{
    sum += b;
}
if(c > 35){
    sum += c;
}

console.log(sum);



// let -- block scope
// var -- global scope
// const -- block scope 