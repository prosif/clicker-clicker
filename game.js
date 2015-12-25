var canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d'),
		style,
		state = {autos: 0, players: 0, money: 115, donateButtonLevel: 0};


function drawButtons(){
	//ctx.fillStyle = "rgba(128, 64, 23, .5)";
	ctx.fillRect(14, 64, 100, 100);
	ctx.fillRect(128 + 14, 64, 100, 100);
	ctx.fillRect(128 * 2 + 14, 64, 100, 100);
	ctx.fillRect(128 * 3 + 14, 64, 100, 100);
	ctx.fillRect(128 * 4 + 14, 64, 100, 100);
	ctx.fillRect(128 * 5 + 14, 64, 100, 100);
	ctx.fillRect(128 * 6 + 14, 64, 100, 100);
	ctx.fillRect(128 * 7 + 14, 64, 100, 100);
	ctx.fillRect(128 * 8 + 14, 64, 100, 100);
	ctx.fillRect(128 * 9 + 14, 64, 100, 100);

	ctx.fillRect(14, 620, 100, 100);
	ctx.fillRect(128 + 14, 620, 100, 100);
	ctx.fillRect(128 * 2 + 14, 620, 100, 100);
	ctx.fillRect(128 * 3 + 14, 620, 100, 100);
	ctx.fillRect(128 * 4 + 14, 620, 100, 100);
	ctx.fillRect(128 * 5 + 14, 620, 100, 100);
	ctx.fillRect(128 * 6 + 14, 620, 100, 100);
	ctx.fillRect(128 * 7 + 14, 620, 100, 100);
	ctx.fillRect(128 * 8 + 14, 620, 100, 100);
	ctx.fillRect(128 * 9 + 14, 620, 100, 100);


}

function givePlayer(){
	state.players = state.players + 1;
}

function buyAuto(){
	if(state.money >= 25){
		state.money = state.money - 25;
		state.autos = state.autos + 1;
	}
}

function createDonateButton(){
	var donateButton = document.createElement("div");
	var content = document.createTextNode("Donate!");
	donateButton.appendChild(content);

	donateButton.addEventListener("click", function(e){
		console.log("donate!");
	});

	document.getElementById("donate").appendChild(donateButton);
}

function upgradeDonateButton(){
	if(state.donateButtonLevel == 0){
		createDonateButton();
	}
	state.donateButtonLevel = state.donateButtonLevel + 1;
}

function draw(){
	ctx.font = "30px Arial";
	ctx.clearRect(0, 0, 1280, 720);
	drawButtons();
	ctx.fillText("Monetization", 600, 32);
	ctx.fillText("Players: " + state.players, 0, 200);
	ctx.fillText("Cash/sec: " + state.autos * state.players, 0, 230);
	ctx.fillText("Total cash: " + state.money, 0, 260); 
	ctx.fillText("Increase player base", 540, 580);
}

canvas.addEventListener('click', function(e) {

	// we are only interested if the player clicked the buttons at the top 
	if(e.layerY <= 100){

		if(e.layerX >= 14 && e.layerX <= 114){
			console.log("button 1 clicked!");
			givePlayer();
		}

		else if(e.layerX >= 128 + 14 && e.layerX <= 228 + 14){
			console.log("button 2 clicked!");
			buyAuto();
		}

		else if(e.layerX >= 128 * 2 + 14 && e.layerX <= 128 * 2 + 100 + 14){
			console.log("button 3 clicked!");
			upgradeDonateButton();
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
	state.money = state.money + state.autos * state.players;
}

window.setInterval(draw, 1000 / 60); // 60fps
window.setInterval(giveAutoPoints, 1000);
