const getData = ()=>{

    console.log("Starting........");
    

    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve("Data fetching successfully...");
            reject("Error in fetching data...");
        },3000)
    })


    console.log(promise);
    promise.then((res)=>{
        console.log(res);
        console.log("Ending....");
        
    })
    promise.catch((err)=>{
        console.log(err);
    })


    
}

getData()