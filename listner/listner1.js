let txt = document.getElementById("txt")
txt.addEventListener("click",()=>{
    txt.innerHTML = "Royal technosoft p ltd."
})
txt.addEventListener("dblclick",()=>{
    txt.style.backgroundColor = "blue"
})
txt.addEventListener("mouseleave",()=>{
    txt.style.height = "200px";
    txt.style.width = "200px";
})