var product = {
    id:1,
    name:"I phone",
    price:89999,
    isAvailable:true,
    color:["white","black","red","blue"],
    description:{
        size:"5.5",
        weight:"1.5",
        ram:"64GB",
        screen:"5.5",
        camera:"5MP",
        battery:"3.5V"
    }
}

console.log(product);

console.log(product.name);
console.log(product.price);
console.log(product.color);
console.log(product.color[0]);


// for(let i=0;i<product.color.length;i++){
//     console.log(product.color[i]);
    
// }


console.log(product.description);
console.log(product.description.ram);



