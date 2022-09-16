function stats(){
const s = Math.floor((Math.random() * 12) + 1);
const d = Math.floor((Math.random() * 12) + 1);
const l = Math.floor((Math.random() * 12) + 1);
document.getElementById("strength").innerHTML = s;
  document.getElementById("dex").innerHTML = d;
  document.getElementById("luck").innerHTML = l;
  
//Hide stat button after the stats have been rolled. So they can not be re rolled.
  document.getElementById("hide-stats-button").style.visibility = "hidden";
}

function showPush(){
    const element = document.getElementById("stop");
  document.getElementById("push").style.visibility = "visible";
  document.getElementById("button-stop").style.visibility = "hidden";

element.remove();
}

function showStop(){
const element = document.getElementById("push");
  
  document.getElementById("stop").style.visibility = "visible";
  document.getElementById("button-push").style.visibility = "hidden";
element.remove();
  
}

function showGreaterThan(){
    const element = document.getElementById(">7");
  document.getElementById("≤7").style.visibility = "visible";
  document.getElementById("button->7").style.visibility = "hidden";

element.remove();
}

function showLessThan(){
const element = document.getElementById("≤7");
  
  document.getElementById(">7").style.visibility = "visible";
  document.getElementById("button-≤7").style.visibility = "hidden";
element.remove();
  
}
