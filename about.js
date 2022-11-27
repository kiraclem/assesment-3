console.log("hello world");




function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("your form has been submitted");
}

function handleImageOver(evt) {
	alert("You are super cool!")
}


let form = document.querySelector('#contact');
let duck = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover' , handleImageOver)

