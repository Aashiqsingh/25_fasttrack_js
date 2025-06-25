const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById("name")
    const age = document.getElementById("age")

    const gender = document.getElementsByName("gender")

    let ans = document.getElementById("ans");

    var gen = "";
    // console.log(gender);
    if(gender[0].checked === true){
        gen = "male"
    }
    else if(gender[1].checked){
        gen = "female"
    }
    else{
        gen = "other"
    }

    if(gen == "male"){
        if(age.value > 18){
            ans.innerHTML = "You are eligible for vote";
        }
        else{
            ans.innerHTML = "You are not eligible for vote";
        }
    }
    else if(gen === "female"){
        if(age.value > 21){
            ans.innerHTML = "You are eligible for vote";
        }
        else{
            ans.innerHTML = "You are not eligible for vote";
        }
    }
    else{
        if(age.value > 25){
            ans.innerHTML = "You are eligible for vote";
        }
        else{
            ans.innerHTML = "You are not eligible for vote";
        }
    }

    console.log(name.value);
    console.log(age.value);
    console.log(gen);
    
    
}