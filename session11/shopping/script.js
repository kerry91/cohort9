const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const box = document.getElementsByClassName("box");
let items = [];

window.onload = function() {
  input.focus();
};

// Getting the length of the user unput field
function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li"); //creates LI
  var span = document.createElement("span"); // creates Span
  var btn = document.createElement("button"); // creates button tag
  span.textContent = input.value; //adds text to span tag based on input.value
  btn.textContent = "x";
  btn.setAttribute("class", "box");
  li.appendChild(span); // adds the span inside the LI
  //li.appendChild(btn); // adds the button inside the LI
  ul.appendChild(li); // appends the LI to the UL

//Adds the line through when the span is clicked. It toggles
  var spans = document.getElementsByTagName("li");
  for (var i = 0, l = spans.length; i < l; i++) {
    var span = spans[i];
    span.addEventListener("click", function(event) {
      event.target.classList.toggle("done");
    });
  }

/*
//Add functionality to remove the li item with the X button
  for (var i = 0; i < box.length; i++) {
    var delLi = box[i];
    delLi.addEventListener("click", function(event) {
      event.target.parentNode.remove();
    });
  }
*/
  items.push(input.value);

}

function findDuplicates() {

for (let i = 0; i < items.length; i++) {

  var duplicates = items.reduce(function(acc, el, i, arr) {
    if (arr.indexOf(el) !== i && acc.indexOf(el) < 0) acc.push(el); return acc;
  }, []);

if(duplicates === duplicates && duplicates.length > 0){
            const list = document.querySelector("ul");
            list.removeChild(list.lastElementChild);
            items.pop();

}
else  {

}

}
console.log(duplicates, items);
}


//add the built list item dependent on if the user has entered something
function addListAfterClick() {

  if (inputLength() > 0) {
    createListElement();
    findDuplicates();

  }
  else {
    message.innerHTML =
              `Please enter an item`;
            }


}





//After the button is clicked it runs the addListAfterClick function
button.addEventListener("click", addListAfterClick);
