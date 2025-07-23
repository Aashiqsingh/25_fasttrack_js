const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully..",
                status:200
            })
        },4000)
    })
}


const answer = async()=>{
    const res = await getData()
    console.log(res);
}

answer()





// async function answer(){

//     console.log("starting........");
    


//     const res = await getData()
//     console.log(res);
    

//     console.log("ending........");
// }

// answer()