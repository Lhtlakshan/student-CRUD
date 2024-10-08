const stuName = document.getElementById("stuName");
const stuAge = document.getElementById("stuAge");
const stuContact = document.getElementById("stuContact");

const addStudent = () => {

  if (stuName.value != "" && stuAge.value != "" && stuContact.value != "") {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      name: stuName.value,
      age: stuAge.value,
      contact: stuContact.value,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(stuName);

    fetch("http://localhost:8080/stu/add-student", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  } else {
    alert("Student name , age and contact should not be empty");
  }
    
};

const clear=()=>{
    stuName=null;
    stuAge=null;    
    stuContact=null;
}


