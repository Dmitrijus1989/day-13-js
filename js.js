let btn = document.getElementById("myButton")
btn.addEventListener("click", someFunction);
// (document.getElementById("myButton")).addEventListener("click", someFunction); /*same, but shorter*/

function someFunction() {
let inputValue = document.getElementById('myInput').value
document.getElementById('myOutput').innerHTML = inputValue
}
/*-----------------------------------*/console.log("-----------------------------");
(document.getElementById("buttonas")).addEventListener("click", printOut);
function printOut() {
let value1 = document.getElementById('name').value
let value2 = document.getElementById('subLine').value
let value3 = document.getElementById('txtArea').value
document.getElementById('myReturn').innerHTML = `${value1}<br>${value2}<br>${value3}`
}
/*-----------------------------------*/console.log("-----------------------------");
(document.getElementById("plusas")).addEventListener("click", atsakimoF);
function atsakimoF() {
  let kaskas1 = document.getElementById('nr1').value;
  let kaskas2 = document.getElementById('nr2').value;
  let kaskas3 = Number(kaskas1) + Number(kaskas2);
  if (!isNaN(kaskas3)) {
    document.getElementById('atsakimas').innerHTML = kaskas3
  } else {
    alert("wrong input!")
  }
}
