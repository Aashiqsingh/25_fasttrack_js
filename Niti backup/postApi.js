// const postData = async()=>{

//     const data = {
//         name:"Niti",
//         email:"niti@gmail.com",
//         age:20,
//         password:"123456",
//         isActive:true
//     }

//     const response = await fetch("https://node5.onrender.com/user/user",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     })

//     console.log(response);
//     const res = await response.json();
//     console.log(res);
    


// }


const postData = async()=>{


    const response = await fetch("https://node5.onrender.com/user/user",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:"Harshita",
            email:"harshita@gmail.com",
            age:22,
            password:"seenu",
            isActive:true
        })
    })

    console.log(response);
    const res = await response.json();
    console.log(res);
    


}