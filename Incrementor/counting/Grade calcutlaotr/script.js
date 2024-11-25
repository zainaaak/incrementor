// SIMPLE ADDITION IPO CALCULATOR BY MR.d

document.getElementById("calc-btn").addEventListener("click", calculation);

// input

function calculation() {
  let number1 = +document.getElementById("client-side").value;
  let number2 = +document.getElementById("struc-prog1").value;
  let number3 = +document.getElementById("struc-prog2").value;
  let number4 = +document.getElementById("script").value;
  let number5 = +document.getElementById("project-a").value;

  // process
  let total = (number1 + number2 + number3 + number4 + number5) / 5;

  // output
  document.getElementById("btn").innerHTML = total;
}
