
var nav=document.querySelector("nav");

function displayMenu(){
	var display=nav.style.display;
	if(display=="none"){
		displayBlock();
	}else{
		displayNone();
	}
}


function displayNone(){
	nav.style.display="none";
	
}


function displayBlock(){
	nav.style.display="block";
	
}