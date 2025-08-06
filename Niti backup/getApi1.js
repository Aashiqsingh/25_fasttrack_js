// API --> Application programming interfaee
// Get 
// POST
// PUT
// DELETE
// Patch


const getData = async()=>{
    const response = await fetch("https://reqres.in/api/users?page=2",{
        method:"GET",
        headers:{
            "x-api-key": "reqres-free-v1",
            "content-type": "application/json"
        }
    })

    // console.log(response);
    const res = await response.json()
    console.log(res.data);

    let tbody = document.getElementById("tbody");
    res.data.forEach((user)=>{
        let tr = document.createElement("tr");
        let idTd = document.createElement("td");
        let firstNameTd = document.createElement("td");
        let lastNameTd = document.createElement("td");
        let emailTd = document.createElement("td");
        let avatarTd = document.createElement("td");
        let img = document.createElement("img");

        idTd.innerText = user.id;
        firstNameTd.innerText = user.first_name;
        lastNameTd.innerText = user.last_name;
        emailTd.innerText = user.email;
        img.src = user.avatar

        tr.appendChild(idTd);
        tr.appendChild(firstNameTd);
        tr.appendChild(lastNameTd);
        tr.appendChild(emailTd);
        tr.appendChild(avatarTd);
        avatarTd.appendChild(img);
        tbody.appendChild(tr);

    })
    
    
}
