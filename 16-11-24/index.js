// Attach the event listener to the form instead of the button
document.querySelector("form").addEventListener("submit", clickedMe);
let arrValue = [];

function clickedMe(event) {
    event.preventDefault(); // Prevent the default form submission

    let obj = {
        title: document.querySelector("#title").value,
        link: document.querySelector("#text").value,
        level: document.querySelector("#difficulty").value
    };

    arrValue.push(obj);
    display(arrValue);
}

function display(arrValue) {

    document.querySelector("tbody").innerHTML = "";


    arrValue.forEach(function (ele) {
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
        td1.innerText = ele.title;

        let td2 = document.createElement("td");
        td2.innerText = ele.link;

        let td3 = document.createElement("td");
        td3.innerText = ele.level;

        let td4 = document.createElement("td");

        if (ele.level === "Easy") {
            td4.innerText = "No";
        } else {
            td4.innerText = "Yes";
        }

        tr.append(td1, td2, td3, td4);
        document.querySelector("tbody").append(tr);
    });
}
