// java --> multi threding application 

// javascript --> single thread application

// callback 



// function demo()
// {
//     console.log("Demo function called...");
// }


// function test(x){
//     // console.log(x);
//     x()
// }


// test(12)
// test(12.55)
// test("hello")
// test(true)


// test(demo)



const science = (option)=>{
    return option.fname + " your admision conifmr in science with percentage " + option.per
}

const commerce = (option)=>{
    return option.fname + " your admision conifmr in commerce with percentage " + option.per
}

const arts = (option)=>{
    return option.fname + " your admision conifmr in arts with percentage " + option.per
}

// cb -- callback 
const admission = (name,per,cb)=>{
    let x = cb({fname:name,per:per})
    console.log(x);
    
}


const percentage = 91;

if(percentage > 90)
{
    admission("honey",percentage,science)
}
else if(percentage > 70)
{
    admission("honey",percentage,commerce)
}
else if(percentage > 50){
    admission("honey",percentage,arts)
}
else{
    console.log("you are not in the budget")
}