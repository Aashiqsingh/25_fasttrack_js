// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"Data fetching successfully...",
//                 status:200
//             })
//         },5000)
//     })

//     // console.log(promise);
//     promise.then((res)=>{
//         console.log(res);
//     }).catch((error)=>{
//         console.log(error);
//     })
    
// }

// getData()




// const getData = ()=>{

//     var promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"Data fetching successfully...",
//                 status:200
//             })
//         },5000)
//     })

//     return promise;
    
// }

// let ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })





// const getData = ()=>{

//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 message:"Data fetching successfully...",
//                 status:200
//             })
//         },5000)
//     })
// }

// let ans = getData()
// // console.log(ans);
// ans.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })






const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            // success({
            //     message:"Data fetching successfully...",
            //     status:200
            // })

            failure({
                message:"Data fetching failed...",
                status:400
            })
        },5000)
    })
}

getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})