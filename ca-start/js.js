//tuscias kintamasis kuriame saugosime rezultata
let result = '';
let pushEq = document.querySelector('.eq');
//vaizdas kuri rodysime skaiciuotuve ekrane
let output = document.querySelector('.output');
//pasizymime buttons
let buttons = document.querySelectorAll('.btn');

//taking all the buttons
buttons.forEach(function(el) {
    el.addEventListener('click', function() {
        console.log(typeof el.innerText);
        calcResult(el.innerText)
        document.querySelector('.output').innerHTML = result
    });
});

// pressing on equal
pushEq.addEventListener('click', function() {
    output.innerText = eval(result);
    result = output.innerText
    console.log(typeof eval(result));
});

// Result calculation
function calcResult(param) {
    if (param === "x") {
      param = "*"
      result = result + param;
    } else {
    result = result + param;
  }
};

function cFunction() {
  result = "";
  document.getElementById('myOutput').innerHTML = 0;
}
