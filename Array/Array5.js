var users = ["ram","shyam","geeta","seeta","priya","anushka","aniket","ashu"]

// filter : it will return new Array with modified data

// let x = users.filter((user)=>{
//     return user.length > 5
// })

// console.log(x);


let x = users.filter((user)=>{
    return user != "priya"
})
console.log(x);
