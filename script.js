
function volume_sphere(event) {
	event.preventDefault()
	const input1 = document.getElementById("radius");
	const input2 = document.getElementById("volume");
	input2.value = "";
	const pi = 3.14159 ;
    let r = input1.value;
	let sphere = 4/3*pi*r*r*r;
     input2.value = sphere;
} 


// let submitbtn = document.getElementById("submit");

// submitbtn.addEventListener("click",volume_sphere)

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
