const sendMail = ()=>{

    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const message = document.getElementById("message")


    // console.log(name.value + email.value + message.value);

    const params = {
        name:name.value,
        email:email.value,
        message:message.value
    }

    const serviceId = "service_8krpwom";
    const templateId = "template_qgmmaae";


    emailjs.send(serviceId,templateId,params).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })


    
}