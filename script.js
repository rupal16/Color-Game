

var numSquares = 6;
colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

//change the color display
colorDisplay.textContent = pickedColor;

//easyBtn clicked
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}

});

//hardBtn clicked
hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
		 
	}
});


for(var i = 0; i < colors.length; i++){
	// initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//listener to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if (clickedColor === pickedColor) {
			message.textContent = "correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "play again?";
		} else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";

		}
	});
}


function changeColors(color){
	//loop through the squares
	//chnage the color to match pickedcolor
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//rerurn tghat array
	return arr;
}


function randomColor(){
	//red
	var r = Math.floor(Math.random() * 256);
	//green
	var g = Math.floor(Math.random() * 256);
	//blue
	var b = Math.floor(Math.random() * 256);
	//return
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}


resetButton.addEventListener("click",function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change color display
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	//change background color
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	this.textContent = "New Colors";
});