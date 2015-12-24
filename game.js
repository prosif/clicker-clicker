var canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d'),
		style,
		state = {points: 0, autos: 0};


function drawButtons(){
	ctx.fillStyle = "rgba(128, 64, 23, .5)";
	ctx.fillRect(14, 0, 100, 100);
	ctx.fillRect(128 + 14, 0, 100, 100);
	ctx.fillRect(128 * 2 + 14, 0, 100, 100);
	ctx.fillRect(128 * 3 + 14, 0, 100, 100);
	ctx.fillRect(128 * 4 + 14, 0, 100, 100);
	ctx.fillRect(128 * 5 + 14, 0, 100, 100);
	ctx.fillRect(128 * 6 + 14, 0, 100, 100);
	ctx.fillRect(128 * 7 + 14, 0, 100, 100);
	ctx.fillRect(128 * 8 + 14, 0, 100, 100);
	ctx.fillRect(128 * 9 + 14, 0, 100, 100);
}

function givePoint(){
	state.points = state.points + 1;
}

function buyAuto(){
	if(state.points >= 25){
		state.points = state.points - 25;
		state.autos = state.autos + 1;
	}
}

function draw(){
	ctx.font = "30px Arial";
	ctx.clearRect(0, 0, 1280, 720);
	drawButtons();
	ctx.fillText("Points: " + state.points, 640, 360);
}

canvas.addEventListener('click', function(e) {

	// we are only interested if the player clicked the buttons at the top 

	if(e.layerY <= 100){
		if(e.layerX >= 14 && e.layerX <= 114){
			console.log("button 1 clicked!");
			givePoint();
		}

		else if(e.layerX >= 128 + 14 && e.layerX <= 228 + 14){
			console.log("button 2 clicked!");
			buyAuto();
		}

		else if(e.layerX >= 128 * 2 + 14 && e.layerX <= 128 * 2 + 100 + 14){
			console.log("button 3 clicked!");
		}

		else if(e.layerX >= 128 * 3 + 14 && e.layerX <= 128 * 3 + 100 + 14){
			console.log("button 4 clicked!");
		}

		else if(e.layerX >= 128 * 4 + 14 && e.layerX <= 128 * 4 + 100 + 14){
			console.log("button 5 clicked!");
		}
	
		else if(e.layerX >= 128 * 5 + 14 && e.layerX <= 128 * 5 + 100 + 14){
			console.log("button 6 clicked!");
		}

		else if(e.layerX >= 128 * 6 + 14 && e.layerX <= 128 * 6 + 100 + 14){
			console.log("button 7 clicked!");
		}

		else if(e.layerX >= 128 * 7 + 14 && e.layerX <= 128 * 7 + 100 + 14){
			console.log("button 8 clicked!");
		}

		else if(e.layerX >= 128 * 8 + 14 && e.layerX <= 128 * 8 + 100 + 14){
			console.log("button 9 clicked!");
		}

		else if(e.layerX >= 128 * 9 + 14 && e.layerX <= 128 * 9 + 100 + 14){
			console.log("button 10 clicked!");
		}

	}
}, false);


function giveAutoPoints(){
	state.points = state.points + state.autos;
}

window.setInterval(draw, 1000 / 60); // 60fps
window.setInterval(giveAutoPoints, 1000);
