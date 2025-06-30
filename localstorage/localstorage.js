const submitHandler = (event)=>{
    event.preventDefault();


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;



    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)



    location.href = ""
}

const getData = ()=>{
    let a = localStorage.getItem("email")
    let b = localStorage.getItem("name")
    let c = localStorage.getItem("password")


    console.log(a,b,c)
}

const clearData = ()=>{
    // localStorage.clear()
    localStorage.removeItem()
}