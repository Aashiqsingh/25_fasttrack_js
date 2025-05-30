function science(per,fname){
    console.log(fname + " your admision confim in science with percentage " + per);
    
}

function commerce(per,fname){
    console.log(fname + " your admision confim in commerce with percentage " + per);
    
}

function arts(per,fname){
    console.log(fname + " your admision confim in arts with percentage " + per);
}


let percentage = 41;

if(percentage > 90){
    science(percentage,"rahul")
}
else if(percentage > 70){
    commerce(percentage,"shree")
}
else if(percentage > 50){
    arts(percentage,"ram")
}
else{
    console.log("Sorry, you are not eligible for admission");
}