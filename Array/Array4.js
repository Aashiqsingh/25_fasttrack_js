var users = ["ram","shyam","geeta","seeta","priya","anushka","aniket","ashu"]


let x = users.map((user)=>{
    return user.length > 5
})

console.log(x);




// users.forEach((user)=>{
//     console.log(user);
    
// })

// map : it will return new array with same length 

// let x = users.map((user)=>{
//     return user.toUpperCase()
// })

// console.log(x);


// var newArray = [];
// users.forEach((user)=>{
//     newArray.push(user.toUpperCase())
// })

// console.log(newArray);
