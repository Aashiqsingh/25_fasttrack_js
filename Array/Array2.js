var users = ["ram","shyam","geeta","seeta","priya","anushka","aniket","ashu"]


// users.forEach((user)=>{
//     console.log(user.toUpperCase());
    
// })


// user == users[i] 


// var flag = false;

// for(let i=0;i<users.length;i++)
// {
//     if(users[i].length < 4)
//     {
//         flag = true;
//     }
// }

// console.log(flag);


// some : boolean

// let x = users.some((user)=>{
//     return user.length < 4
// })

// console.log(x);


let x = users.some((u)=> u.startsWith("p"))
console.log(x);
