document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault();

    
    let image = document.querySelector("#image").value;
    let name = document.querySelector("#name").value;
    let batch = document.querySelector("#batch").value;
    let dsa = parseInt(document.querySelector("#dsa").value); 
    let cs = parseInt(document.querySelector("#cs").value);  
    let coding = parseInt(document.querySelector("#coding").value);  


    let tr = document.createElement("tr");

   
    let td1 = document.createElement("td");
    if (image) {
        let img = document.createElement("img");
        img.src = image;
        img.alt = "Student Image";
        img.style.width = "50px"; 
        img.style.height = "50px";
        td1.appendChild(img);
    } else {
        td1.innerText = "No Image";  
    }

    
    let td2 = document.createElement("td");
    td2.innerText = name;

    
    let td3 = document.createElement("td");
    td3.innerText = batch;

   
    let td4 = document.createElement("td");
    td4.innerText = dsa;

    let td5 = document.createElement("td");
    td5.innerText = cs;

    let td6 = document.createElement("td");
    td6.innerText = coding;

    let obtained = dsa + cs + coding;
    let percentage = (obtained / 30) * 100;

   
    let td7 = document.createElement("td");
    td7.innerText = percentage.toFixed(2);  

   
    let td8 = document.createElement("td");
    if (percentage > 50) {
        td8.innerText = "Regular";
        td8.style.color = "green";  
    } else {
        td8.innerText = "Async";
        td8.style.color = "red"; 
    }

    
    let td9 = document.createElement("td");
    td9.innerText = "DELETE";
    td9.style.color = "red";
    td9.style.cursor = "pointer"; 

    
    td9.addEventListener("click", function () {
        tr.remove();  
    });

    
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);

    
    document.querySelector("tbody").append(tr);

   
    document.querySelector("form").reset();
}
