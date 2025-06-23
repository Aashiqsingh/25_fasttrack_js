function changeColor(){
    let colors =document.getElementById("colors")
    console.log(colors.value);



    let mydiv = document.getElementById("mydiv")
    mydiv.style.height = "200px"
    mydiv.style.width = "200px"
    mydiv.style.backgroundColor = colors.value
    mydiv.style.margin = "100px 400px"
    
}