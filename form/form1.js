function submitHandler(event){
    event.preventDefault();
    // alert("Form submitted...")

    // console.log("form submitted...");

    let name = document.getElementById("name").value 
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value

    let nameErr = document.getElementById("nameErr")
    let emailErr = document.getElementById("emailErr")
    let ageErr = document.getElementById("ageErr")


    if(name == ""){
        // alert("Name is required...")
        nameErr.innerHTML = "Name is required..."
        nameErr.style.color = "red"
    }
    else if(name.length < 4){
        nameErr.innerHTML = "Name should be atleast 4 characters..."
        nameErr.style.color = "red"
    }
    else{
        nameErr.innerHTML = name 
        nameErr.style.color = "green"
    }

    if(age < 18){
        ageErr.innerHTML = "Not eligible";
        ageErr.style.color = "red"
    }
    else{
        ageErr.innerHTML = age
        ageErr.style.color = "green"
    }




    // console.log(name, email, age);
    // const user = {
    //     name:name,
    //     email:email,
    //     age:age
    // }

    // const user = {
    //     name,
    //     email,
    //     age
    // }

    // console.log(user);

    // let ans = document.getElementById("ans");
    // // ans.innerHTML = user
    // let res = JSON.stringify(user)
    // ans.innerHTML = res

    // console.log(res[0]);
    
    
    
}