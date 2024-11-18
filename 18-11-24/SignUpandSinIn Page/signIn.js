document.querySelector("button").addEventListener("click", myFunction1);
let data = JSON.parse(localStorage.getItem("Data")) || [];

function myFunction1() {
    let mail = document.querySelector("#myTag").value
}


data.forEach(function (elem) {
    if (mail === elem.mail || mail === elem.number) {
        document.querySelector("#text").innerText = "Successfully Signed In"
        alert("Successfully Signed In")
    }
    isSignedIn = true;
})

if (!isSignedIn) {
    document.querySelector("#text").innerText = "Invalid email or phone number.";
}