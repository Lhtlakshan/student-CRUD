let tblStudent = document.getElementById("tblStudent");

const viewStudent = (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let body = ``;

  fetch(`http://localhost:8080/stu/get-student-by-Id/${id}`, requestOptions)
    .then((response) => response.json())
    .then((stu) => {
      body = `<div class="card" style="width: 300px;">
          <div class="card-body">
            <h5 class="card-title">${stu.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Age: ${stu.age}</h6>
            <p class="card-text">Contact: ${stu.contact}</p>
          </div>
          <button class="btn btn-secondary" onclick="viewAllStudents()">Back to Student list </button>
        </div>`;

      tblStudent.innerHTML = body;
    })
    .catch((error) => console.error(error));
};

const viewAllStudents = () => {
  let body = `<h1>Student list</h1><br>
             <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Contact</th>
                <th>Action</th>
             </tr>`;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("http://localhost:8080/stu/all", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        body += `<tr onclick="viewStudent(${element.id})">
                <td>${element.name}</td>
                <td>${element.age}</td>
                <td>${element.contact}</td>
                <td>
                  <button class="btn btn-danger" onclick="deleteStudent(${element.id})">Delete</button>
                </td>
            </tr>`;
      });

      tblStudent.innerHTML = body;
    })
    .catch((error) => console.error(error));
};

viewAllStudents();



const deleteStudent = (id) => {
  const raw = "";

  const requestOptions = {
    method: "DELETE",
    body: raw,
    redirect: "follow",
  };

  fetch(`http://localhost:8080/stu/${id}`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
      viewAllStudents();
    })
    .catch((error) => console.error(error));
};
