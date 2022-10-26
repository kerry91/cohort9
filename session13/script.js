function cLogX2() {
  const one = "Gotta catch";
  const two = "em all!";
  console.log(one, two);
}

document.getElementById("maths").addEventListener("submit", submitForm());
function submitForm() {

  let num1 = document.getElementById("num-one").value;
  let num2 = document.getElementById("num-two").value;
  let num3 = document.getElementById("num-three").value;
  const math = (num1 + num2) * num3;
  const result = document.getElementById("results");


  if (num1 === "") {
    result.innerHTML = "Enter a first number";
  }
  else if (num2 === "") {
    result.innerHTML = "Enter a second number";
  }
  else if (num3 === "") {
    result.innerHTML = "Enter a third number";
  }

  else {
    result.innerHTML = `${math}`;
  }
  console.log(math);
}

function cLogX2CS() {
  const one = "Hello";
  const two = "world";
  console.log(one + " " + two);
}

document.getElementById("string-match").addEventListener("submit2", submitForm2());
function submitForm2() {

  let string1 = document.getElementById("string-one").value;
  let string2 = document.getElementById("string-two").value;
  let match = string1.localeCompare(string2);
  const result2 = document.getElementById("results2");


  if (string1 === "") {
    result2.innerHTML = "Enter a first string";
  }
  else if (string2 === "") {
    result2.innerHTML = "Enter a second string";
  }

  else if (match !== 0) {
    result2.innerHTML = "Strings do not match";
  }
  else {
    result2.innerHTML = "Strings do match";
  }
  console.log(string1, string2);
}
function strings() {
  let emptyS = "";
  emptyS = "Hello";
  emptyS = emptyS.concat(" ", "World!");

  console.log(emptyS);
}
