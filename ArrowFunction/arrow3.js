const lasvegas = (option)=>{
    return option.fname + " your tour is confirm in lasvegas with package " + option.price
    
}
const newyork = (option)=>{
    return option.fname + " your tour is confirm in newyork with package " + option.price
}

const goa = (option)=>{
    return option.fname + " your tour is confirm in goa with package " + option.price
}


var budget = parseInt(prompt("Enter your budget"));
var temp;

if(budget > 3500)
{
    temp = lasvegas({
        fname:"hiya",
        price:budget
    })
}
else if(budget > 2000)
{
    temp = newyork({fname:"niti",price:budget})
}
else if(budget > 1000)
{
    temp = goa({fname:"niti",price:budget})
}
else{
    console.log("you are not in the budget")
}

console.log(temp);
