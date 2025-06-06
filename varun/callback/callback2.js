const science = (option)=>{
    return option.fname + " ur admission confirm in science with per " + option.per;
}

const commerce = (option)=>{
    return option.fname + " ur admission confirm in commerce with per " + option.per;
}

const arts = (option)=>{
    return option.fname + " ur admission confirm in arts with per " + option.per;
}

const admission = (fname,per,cb)=>{
    // let x = cb({fname:fname,per:per})
    // console.log(x);

    // --------------------------------------------

    // let x = cb({
    //     fname:fname,
    //     per:per
    // })

    // --------------------------------------------

    // return x

    return cb({
        fname:fname,
        per:per
    })
    
}

let percentage = 71;
let ans;

if(percentage > 90){
    ans = admission("varun",percentage,science)
}
else if(percentage > 70){
    ans = admission("varun",percentage,commerce)
}
else if(percentage > 50){
    ans = admission("varun",percentage,arts)
}
else{
    console.log("sorry percentage is not enough")
}

console.log(ans);
