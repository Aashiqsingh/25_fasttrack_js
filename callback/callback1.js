function demo(){
    console.log("demo function called...");
    
}



function test(x){
    // console.log(x);
    x()
}


// test(13)
// test("ram")
// test(12.2)
// test(true)


test(demo)