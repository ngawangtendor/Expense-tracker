/* document.addEventListener("DOMContentLoaded", function () {
    //select the name class
    const expense = document.querySelector(".container h1");
    expense.style.color = 'red';


    const submit = document.querySelector(".button");
    
    submit.addEventListener("click", function () {
        //select the name class
        const name = document.querySelector(".name");
        const amount = document.querySelector(".amount");
        const date = document.querySelector(".date");
        const change = document.querySelector(".change");
        //create a new row
        const table = document.querySelector("table");
        const tr = document.createElement("tr");
        const tdName = document.createElement("th");
        const tdAmount = document.createElement("th");
        const tdDate = document.createElement("th");
        //const tdButton = document.createElement("button");

        tdName.innerHTML = name.value;
        tdAmount.innerHTML = amount.value;
        tdDate.innerHTML = date.value;
        //tdButton.textContent = "Delete";


        tr.appendChild(tdName);
        tr.appendChild(tdAmount);
        tr.appendChild(tdDate);

        
        table.appendChild(tr);


 
        //tr.appendChild(tdButton);

        

        table.appendChild(tr);
        
       
         


        name.value = "";
        amount.value = "";
        date.value = "";


    });
});

 */


function applyStyle(element) {
    element.style.border = "1px solid black";
    element.style.height = "50px";
    element.style.width = "50px";
 
}

document.addEventListener("DOMContentLoaded", function () {
    //select the name class
    const expense = document.querySelector(".container h1");
    expense.style.color = 'red';

    const submit = document.querySelector(".button");
    const change = document.querySelector(".change");
    

    submit.addEventListener("click", function (event) {
        // c'est  event.preventDefault() ?
        // event.preventDefault();  // pour éviter le rechargement de la page
        event.preventDefault();

        const name = document.querySelector(".name").value;
        const date = document.querySelector(".date").value;
        const amount = document.querySelector(".amount").value;
        
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");

        const td4 = document.createElement("button");

        td1.textContent = name;
        td2.textContent = date;
        td3.textContent = amount;

        applyStyle(td1);
        applyStyle(td2);
        applyStyle(td3);
        applyStyle(td4);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        
        change.appendChild(tr);


        td4.addEventListener("click", function () {
            tr.remove();
        });

        document.querySelector(".name").value = "";
        document.querySelector(".date").value = "";
        document.querySelector(".amount").value = "";

        if(name === "" || date === "" || amount === ""){
            change.removeChild(tr);
        }

    });
});