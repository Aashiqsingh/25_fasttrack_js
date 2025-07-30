const getData = async () => {
  const response = await fetch("https://node5.onrender.com/user/user", {
    method: "GET",
  });
  const res = await response.json();
  console.log(res.data);

  const tbody = document.getElementById("tbody");

  res.data.forEach((user) => {
    let tr = document.createElement("tr");

    let idtd = document.createElement("td");
    let nametd = document.createElement("td");
    let emailtd = document.createElement("td");
    let agetd = document.createElement("td");
    let statustd = document.createElement("td");
    let deleteTd = document.createElement("td");
    let btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.className = "btn btn-danger";
    btn.addEventListener("click",async()=>{
        // alert("Deleted")
        // alert(user._id)
        const res2 = await fetch("https://node5.onrender.com/user/user/"+user._id,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        console.log(res2)
        tr.remove()
    })

    idtd.innerHTML = user._id;
    nametd.innerHTML = user.name;
    emailtd.innerHTML = user.email;
    agetd.innerHTML = user.age;
    statustd.innerHTML = user.isActive;

    tr.appendChild(idtd);
    tr.appendChild(nametd);
    tr.appendChild(emailtd);
    tr.appendChild(agetd);
    tr.appendChild(statustd);
    tr.appendChild(deleteTd);
    deleteTd.appendChild(btn);
    tbody.appendChild(tr);
  });
};