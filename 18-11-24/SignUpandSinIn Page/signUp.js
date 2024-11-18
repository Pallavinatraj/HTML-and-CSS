document.querySelector("button").addEventListener("click", myFunction);
let infoData = JSON.parse(localStorage.getItem("data")) || [];



function myFunction() {
    let name = document.querySelector("#myTag").value;
    let mail = document.querySelector("#myMail").value;
    let number = document.querySelector("#myNumber").value;
    let code = document.querySelector("#myCode").value;

    if (!name || !mail || !number || !code) {
        alert("Please fill in all fields.");
        return;
    }

    let myObj = {
        name: name,
        email: mail,
        number: number,
        code: code
    }

    infoData.push(myObj);


    localStorage.setItem("data", JSON.stringify(infoData));
    alert("Succesfully Registered")

}

