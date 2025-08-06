const submitHandler = async(event)=>{
    event.preventDefault();

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");
    let password = document.getElementById("password");
    let status = document.getElementById("status");

    const data = {
        name:name.value,
        email:email.value,
        age:age.value,
        password:password.value,
        isActive:status.value
    }

    console.log(data);

    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })

    const res = await response.json();

    console.log(res);
    
    
}