
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
	//mode buttons
		for (var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
		}

		for(var i = 0; i < colors.length; i++){
		// initial colors to squares
		// squares[i].style.backgroundColor = colors[i];

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
	reset();


}






function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new color
	pickedColor = pickColor();
	//change color display
	colorDisplay.textContent = pickedColor;
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	}
	//change background color
	h1.style.backgroundColor = "steelblue";
	message.textContent = "";
	resetButton.textContent = "New Colors";
}



//change the color display
colorDisplay.textContent = pickedColor;






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
	reset();
});