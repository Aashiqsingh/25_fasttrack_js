let mydiv = document.getElementById("mydiv")

const addElement = ()=>{


    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosoft";


    let link = document.createElement("a")
    link.innerHTML = "google";
    link.setAttribute("href","https://www.google.com")
    link.target = "_blank"



    mydiv.appendChild(h1)
    mydiv.appendChild(document.createElement("br"))
    mydiv.appendChild(link)    
}