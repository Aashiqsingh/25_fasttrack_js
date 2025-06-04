const wordHandler = (option)=>{
    return option.fname + " is handle with wordHandler..."
}

const pngHandler = (option)=>{
    return option.fname + " is handle with pngHandler..."
}

const jpgHandler = (option)=>{
    return option.fname + " is handle with jpgHandler..."
}


const Handler = (data,cb)=>{
    return cb({fname:data.fname,size:data.size})
}

let fileName = "xyz.png"
var temp;

if(fileName.endsWith(".word"))
{
    temp = Handler({fname:fileName,size:"1000kb"},wordHandler)
}
else if(fileName.endsWith(".png"))
{
    temp = Handler({fname:fileName,size:"2000kb"},pngHandler)
}

else if(fileName.endsWith(".jpg")){
    temp = Handler({fname:fileName,size:"3000kb"},jpgHandler)
}
console.log(temp);
