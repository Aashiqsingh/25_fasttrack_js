var students = [
    {
        id:1,
        name:"niti",
        age:18,
        email:"niti@gmail.com",
        status:true
    },
    {
        id:2,
        name:"varun",
        age:19,
        email:"varun@gmail.com",
        status:true
    },
    {
        id:3,
        name:"manush",
        age:22,
        email:"manush@gmail.com",
        status:true
    },
    {
        id:4,
        name:"meet",
        age:23,
        email:"meet@gmail.com",
        status:true
    }
]

// console.log(students);

// for(let i=0;i<students.length;i++){
//     console.log(students[i].name);
    
// }

// let ans = students.map((stu)=>{
//     return stu.name
// })
// console.log(ans);


// let x = students.filter((stu)=>{
//     return stu.age > 20 
// })
// console.log(x);


students.forEach((stu)=>{
    if(stu.age > 20){
        console.log(stu.name);
        
    }
})