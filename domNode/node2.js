let students = [
    {
        id: 1,
        name: "niti",
        age: 20,
        email: "niti@gmail.com",
        isActive: true
    },
    {
        id: 2,
        name: "priya",
        age: 20,
        email: "priya@gmail.com",
        isActive: true,
        url:""
    },
    {
        id: 3,
        name: "harsh",
        age: 22,
        email: "harsh@gmail.com",
        isActive: false
    },
    {
        id: 4,
        name: "meet",
        age: 22,
        email: "meet@gmail.com",
        isActive: true
    },
    {
        id: 5,
        name: "aashi",
        age: 22,
        email: "aashi@gmail.com",
        isActive: true
    }
]

let tbody = document.getElementById("tbody")
let thead = document.getElementById("thead")
thead.style.display = "none"

const addData = () => {
    thead.style.display = ""

    for (let i = 0; i < students.length; i++) {
        let tr = document.createElement("tr")
        let idTd = document.createElement("td")
        let nameTd = document.createElement("td")
        let ageTd = document.createElement("td")
        let emailTd = document.createElement("td")
        let statusTd = document.createElement("td")



        idTd.innerHTML = students[i].id;
        nameTd.innerHTML = students[i].name;
        ageTd.innerHTML = students[i].age;
        emailTd.innerHTML = students[i].email;
        statusTd.innerHTML = students[i].isActive ? "Active" : "Inactive";





        tbody.appendChild(tr)
        tr.appendChild(idTd)
        tr.appendChild(nameTd)
        tr.appendChild(ageTd)
        tr.appendChild(emailTd)
        tr.appendChild(statusTd)

    }


}