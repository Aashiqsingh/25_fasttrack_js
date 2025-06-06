var users = ["rama","shyam","geeta","seeta","priya","anushka","aniket","ashu"]


// every : boolean

// let x = users.every((user)=>{
//     return user.length > 3
// })
// console.log(x);

let x = users.every((user)=> user.startsWith("p"))
console.log(x);