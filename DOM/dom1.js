
function changeTxt(){
    // document.getElementById("txt").innerHTML = "Royal technosoft p ltd."
    let txt = document.getElementById("txt")
    txt.innerHTML = "Royal technosoft p ltd.";
    txt.style.backgroundColor = "red";
    txt.style.color = "white";
    txt.style.height = "100px";
    txt.style.width = "100px";
}


const changeHref = ()=>{

    let link = document.getElementById("link")
    link.href = "https://www.netflix.com"
    link.innerHTML = "Netflix"
    link.target = "_blank"
}


function changeSize(){
    let img = document.getElementById("img")
    img.style.height = "500px";
    img.style.width = "500px";
    img.style.borderRadius = "50%";
    img.style.outline = "10px dotted darkblue"
}