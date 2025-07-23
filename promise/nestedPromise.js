const getOrder = ()=>{

    console.log("Oredr is going to be placed..");
    

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                orderId:121,
                message:"Order placed successfully..",
                amount:789
            })
        },4000);

    })
}


const getPayement = (data)=>{

    console.log("Payment is going to be made..");
    

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({
                paymentId:data.orderId,
                message:"Payment made successfully..",
                amount:data.amount
            })
        },5000);
    })
}


getOrder().then((data)=>{

    console.log("Food ordered...",data);

    getPayement(data).then((res)=>{
        console.log("Payment made...",res);
    }).catch((error)=>{
        console.log("Payment failed..",error);
    })
    
}).catch((err)=>{
    console.log("order failed..",err);
    
})