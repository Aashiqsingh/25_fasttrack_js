let a = 1;

var colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white","teal","pink"];


// colors[0]

function changeSize(){
    let x = document.getElementById("mydiv")


    let randomIndex = Math.floor(Math.random() * colors.length)
    console.log(randomIndex);
    

    x.style.backgroundColor = colors[randomIndex]


    // console.log("hello");
    // console.log("hello " + (a++));
    
}