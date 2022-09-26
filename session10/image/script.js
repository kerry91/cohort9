function toggleImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("pink")) {
    image.src = "blue.png";
  } else {
    image.src = "pink.png";
  }
}

function toggleBackground() {
   var element = document.body;
   element.classList.toggle("background");
}