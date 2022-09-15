function showElem() {
  document.getElementById("welcome-selection").style.visibility = "visible"; 
  //document.getElementById("character").style.visibility = "hidden"; 
}

//Skin tone
document.getElementById('skin-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--skin-tone', this.value);
});

//Eye color
document.getElementById('eye-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--eye-color', this.value);
});

//Hair color
document.getElementById('hair-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--hair-color', this.value);
});

//Pant color
document.getElementById('pant-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--pant-color', this.value);
});

//Shirt color
document.getElementById('shirt-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--shirt-color', this.value);
});

//Belt color
document.getElementById('belt-color').addEventListener('change', function(){
	document.documentElement.style.setProperty('--belt-color', this.value);
});


