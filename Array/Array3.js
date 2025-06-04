var users = ["pram","pshyam","pgeeta","pseeta","priya","panushka","paniket","pashu"]


// every : boolean

// let x = users.every((user)=>{
//     return user.length < 4
// })
// console.log(x);

let x = users.every((user)=> user.startsWith("p"))
console.log(x);
