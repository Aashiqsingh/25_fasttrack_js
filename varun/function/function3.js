function lasvegas(fname,amount){
    return fname + " ur tour confirm in lasvegas with package " + amount
    
}
function newyork(fname,amount){
    return fname + " ur tour confirm in newyork with package " + amount
}

function paris(fname,amount){
    return fname + " ur tour confirm in paris with package " + amount
}

function london(fname,amount){
    return `hello ${fname} ur tour confirm in london with package ${amount}`
}

let budget = parseInt(prompt("enter budget"));
var name = "shradha";
var ans;

if(budget > 4000){
    ans = lasvegas("varun",budget)
}
else if(budget > 3000){
    ans= newyork(name,budget)
}
else if(budget > 2000){
    ans = paris(name,budget)
}
else if(budget > 1000){
    ans = london(name,budget)
}
else{
    console.log("sorry budget is not enough")
}
console.log(ans);
