function AddWField(){

    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("rows", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','enter here');
    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");
 
    weOb.insertBefore(newNode, weAddButtonOb);
 }

function addAField(){
    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("rows", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute('placeholder','enter here');
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");
 
    aqOb.insertBefore(newNode, aqAddButtonOb);

    
 }
 function generateCV(){
let nameField = document.getElementById("nameField").Value;
let nameT1 = document.getElementById("nameT1");

nameT1.innerHTML = nameField;

document.getElementById("fbField").innerHTML = nameField;

 }
 