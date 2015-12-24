var canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d'),
		style,
		state = {points: 0, autos: 0};

ctx.font = "30px Arial";

function givePoint(){
	state.points = state.points + 1;
	//draw()
}

function buyAuto(){
	if(state.points >= 25){
		state.points = state.points - 25;
	}
	state.autos = state.autos + 1;
}

function draw(){
	//console.log("yo");
	ctx.clearRect(0, 0, 1280, 720);
	ctx.fillText("Points: " + state.points, 640, 360);
  //style = "rgba(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.random() + ")";
	//ctx.fillStyle = style;
	//ctx.fillRect((Math.random() * 1280),  (Math.random() * 720), (Math.random() * 100), (Math.random() * 100));
}

function giveAutoPoints(){
	state.points = state.points + state.autos;
}

window.setInterval(draw, 1000 / 60); // 60fps
window.setInterval(giveAutoPoints, 1000);
