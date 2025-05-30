function science(per,fname){
    return fname + " your admision confim in science with percentage " + per
    
}

function commerce(per,fname){
    return fname + " your admision confim in commerce with percentage " + per
    
}

function arts(per,fname){
    return fname + " your admision confim in arts with percentage " + per
}


let percentage = 91;
var temp;

if(percentage > 90){
    temp= science(percentage,"rahul")
}
else if(percentage > 70){
    temp= commerce(percentage,"shree")
}
else if(percentage > 50){
    temp = arts(percentage,"ram")
}
else{
    console.log("Sorry, you are not eligible for admission");
}
console.log(temp);
