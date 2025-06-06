// javascript --> sigle threded application 

// java --> multi threded application

// callback  --> function which is called after the function is executed


function demo(){
    console.log("demo function call...");
    
}


function test(x){
    // console.log(x);
    x()
    
}

// test(12)
// test("ram")
// test(true)
// test(12.55)


test(demo)