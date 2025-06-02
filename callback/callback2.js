const science = (option)=>{
    return option.fname + " your addmision is confirm in science with percentage " + option.per
}

const commerce = (option)=>{
    return option.fname + " your addmision is confirm in commerce with percentage " + option.per
}

const arts = (option)=>{
    return option.fname + " your addmision is confirm in arts with percentage " + option.per
}

// cb -- callback 
const addmission = (name,per,cb)=>{

    // let x = cb({fname:name,per:per})

    // return x;
    
    return cb({fname:name,per:per})

    
}


var percentage = 71;
var temp;

if(percentage > 90)
{
    temp = addmission("ram",percentage,science)
}
else if(percentage > 70)
{
    temp = addmission("ram",percentage,commerce)
}
else if(percentage > 50){
    temp = addmission("ram",percentage,arts)
}
else{
    console.log("Fail...")
}

console.log(temp);
