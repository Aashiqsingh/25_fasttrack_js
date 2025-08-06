const getData = async () => {
    const res = await fetch("https://node5.onrender.com/user/user",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        }

    })
     const response = await res.json()
    console.log(response);
    let tbody = document.getElementById("tbody");
     response.data.forEach((user) => {
        let tr = document.createElement("tr");
        let _idTd = document.createElement("td");
        let nameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let passwordTd = document.createElement("td");
        let ageTd = document.createElement("td");
        let isActiveTd = document.createElement("td");
        let actionTd = document.createElement("td");
        let btn = document.createElement("button");
        btn.innerText = "DELETE";
        btn.className = "btn btn-danger";
        btn.addEventListener("click",async()=>{
            // alert(user._id);
            const deleteData =await fetch("https://node5.onrender.com/user/user/"+user._id,{
                method:"DELETE",
                headers:{
                    "content-type":"application/json"
                }
            })

            // console.log(deleteData);
            // const data = await deleteData.json()
            // console.log(data);
            tr.remove()
        })

        _idTd.innerText = user._id;
        nameTd.innerText=user.name;
        emailTd.innerText=user.email;
        passwordTd.innerText=user.password;
        ageTd.innerText=user.age;
        isActiveTd.innerText=user.isActive;

    
        
        tr.appendChild(_idTd);
        tr.appendChild(nameTd);
        tr.appendChild(emailTd);
        tr.appendChild(passwordTd);
        tr.appendChild(ageTd);
        tr.appendChild(isActiveTd);
        tr.appendChild(actionTd);
        actionTd.appendChild(btn);
        tbody.appendChild(tr);
        

     })

}