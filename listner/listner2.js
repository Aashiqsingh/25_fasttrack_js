let box = document.getElementsByClassName("box")
console.log(box);

box[0].addEventListener("click",()=>{
    box[2].style.backgroundColor = "green"
})
box[2].addEventListener("mouseover",()=>{
    box[0].style.backgroundColor = "blue";
    box[0].style.borderRadius = "50%"
})


let colors = ["red","green","blue","yellow","purple"]
box[3].addEventListener("mousemove",()=>{
    randomIndex = Math.floor(Math.random() * colors.length);
    box[1].style.backgroundColor = colors[randomIndex];
})