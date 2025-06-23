function changeTxt(){
    let name = document.getElementById("name")
    let result = document.getElementById("result")

    // console.log(name.value);

    if(name.value.length < 3){
        // alert("Name is too short..")
        result.innerHTML = "Name is too short.."
        result.style.color = "red";
        name.style.outline = "2px solid red"
    }
    else{
        result.innerHTML = name.value
        result.style.color = "green"
        name.style.outline = "2px solid green"
    }
   
    
}