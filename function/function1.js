// 1. without return without argument 



function demo(){
    console.log("demo function called...");
    
}

// demo()

// 2. without return with argument


function add(a,b){
    console.log("Addition = ",a+b);
    
}

// add("shree","ram")
// add(10,20)


// 3. with return without argument


function str(){
    return "Hello good evening..."
}

// let ans = str()
// console.log(ans)

// console.log(str());

// 4. with return with argument

function mul(x,y,z){
    return "Multiply = " +  x * y * z
}

let ans = mul(2,3,4)
// console.log("Multiply = ",ans);
// console.log(ans);




function isOdd(x){
    return x % 2 != 0 ? "Odd" : "Even"
}

// let x = isOdd(6)
// console.log(x == true ? "Odd" : "Even");

// isOdd(6)? console.log("Odd") : console.log("Even");
let x = isOdd(7)
console.log(x);


