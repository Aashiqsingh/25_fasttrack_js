let a = parseInt(prompt("Enter first number :"))
let b = parseInt(prompt("Enter second number :"))

let choice = parseInt(prompt("1 for Add \n2 for Sub \n3 for Mul \n4 for div \n\nEnter your choice :"))

switch(choice){
    case 1 : 
        // console.log("Addition = ",a+b);
        alert("Addition = " + (a+b))
        break;

    case 2: console.log("Subtrcat = ",a-b);
        break
    
    case 3: console.log("multiplication = ",a*b);
        break;

    case 4: console.log("Divide = ",a/b);
        break;

    default: console.log("Please select right option..");
    break
    
    
    
    
}