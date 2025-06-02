const lasvegas = (option)=>{
    console.log(option.fname + " your tour is confirm in lasvegas with package " + option.price);
    
}
const newyork = (option)=>{
    console.log(option.fname + " your tour is confirm in newyork with package " + option.price);
}

const goa = (option)=>{
    console.log(option.fname + " your tour is confirm in goa with package " + option.price);
}


var budget = 1500;

if(budget > 3500)
{
    lasvegas({
        fname:"hiya",
        price:budget
    })
}
else if(budget > 2000)
{
    newyork({fname:"niti",price:budget})
}
else if(budget > 1000)
{
    goa({fname:"niti",price:budget})
}
else{
    console.log("you are not in the budget")
}