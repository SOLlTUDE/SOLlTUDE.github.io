if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	
	setInterval(loop, 500);

}

var x = 0;

var titleText = [ "ㅤ", "s", "so", "sol", "soli", "solit", "solitu", "solitud", "solitude", "solitude.", "ㅤ", "solitude.", "ㅤ", "solitude", "solitud",  "solitu", "solit", "soli"," sol", "so", "s", "ㅤ"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}