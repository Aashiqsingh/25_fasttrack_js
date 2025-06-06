function lasvegas(fname,amount){
    console.log(fname + " ur tour confirm in lasvegas with package " + amount);
    
}
function newyork(fname,amount){
    console.log(fname + " ur tour confirm in newyork with package " + amount);
}

function paris(fname,amount){
    console.log(fname + " ur tour confirm in paris with package " + amount);
}

function london(fname,amount){
    console.log(fname + " ur tour confirm in london with package " + amount);
}

let budget = parseInt(prompt("enter budget"));
var name = "shradha"
if(budget > 4000){
    lasvegas("varun",budget)
}
else if(budget > 3000){
    newyork(name,budget)
}
else if(budget > 2000){
    paris(name,budget)
}
else if(budget > 1000){
    london(name,budget)
}
else{
    console.log("sorry budget is not enough")
}