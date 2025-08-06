const addData = async()=>{

    // var user = {
    //     name:"rahul",
    //     age:25,
    //     password:"rahul123",
    //     email:"rahul@gmail.com",
    //     isActive:true
    // }

    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"Deepak",
        age:25,
        password:"deepak123",
        email:"deepak@gmail.com",
        isActive:true
        })
    })

    // console.log(res);
    const response = await res.json();
    console.log(response);
    

    console.log("Hello " + response.name + "");
    console.log(`Hello ${response.name} your age is ${response.age}`);
    
    



}