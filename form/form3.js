const submitHandler = (event)=>{
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    const nameErr = document.getElementById('nameErr');
    const emailErr = document.getElementById('emailErr');
    const mobileErr = document.getElementById('mobileErr');


    let namePattern = /[A-Z]{1}[A-Za-z]+$/;

    if(!name.match(namePattern))
    {
        nameErr.innerHTML = "Name should start with a capital letter and contain only letters.";
    }
    else{
        nameErr.innerHTML = "";
    }

    // aashiqsingh56789@gmail.com

    let emailPattern = /^[a-z0-9]+\@[a-z]+\.[a-z]+$/
    if(!email.match(emailPattern)){
        emailErr.innerHTML = "Email should be in the format"
    }
    else{
        emailErr.innerHTML = "";
    }



    let mobilePattern = /^[6-9]{1}[0-9]{9}$/
    if(!mobile.match(mobilePattern)){
        mobileErr.innerHTML = "Mobile number should start with 6-9 and contain 10 digits.";
    }
    else{
        mobileErr.innerHTML = "";
    }
  
}