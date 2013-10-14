directions = {
	//Direction Arrows
	"up": 38,
	"down": 40,
	"left": 37,
	"right": 39,
	//"z"
	"action": 90
};

inventory = {};

//Checks for keydown
document.getElementsByTagName('html')[0].onkeydown = function(currentKey) {
	var keyCode = currentKey.keyCode;

	if(checkForMatch(directions, keyCode) == true) {
		move(keyCode);
	}
};

var checkForMatch = function(object, value) {
	for(var k in object) {
		if(!object.hasOwnProperty(k)) continue;
		if(object[k] === value) {
			return true;
		}
	}
};

var move = function(keyCode) {
	var woman_sprite = document.getElementById("woman");
	var woman = document.getElementById("woman-bounding-box");

	switch(keyCode) {
		case directions["left"]:
			if (woman_sprite.getAttribute("src").search("ada_gun1") > 0) {
				woman_sprite.setAttribute("src", "assets/woman.png");
			}
			if (woman_sprite.className.search("left") == -1) {
				woman_sprite.className = woman_sprite.className + " left";				
			}

			console.log("left");
			var woman_bounding_left = woman.getBoundingClientRect()["left"];
			var new_left = woman_bounding_left - 20;
			woman.style.left = new_left;
			console.log(woman.style.left);			
		break;

		case directions["right"]:
			if (woman_sprite.className.search("left") != -1) {
				woman_sprite.className = "";				
			}
			if (woman_sprite.getAttribute("src").search("ada_gun1") > 0) {
				woman_sprite.setAttribute("src", "assets/woman.png");
			}
			
			console.log("right");
			var woman_bounding_right = woman.getBoundingClientRect()["right"];
			var movement = woman_bounding_right - 80;
			woman.style.left = movement;	
			console.log(woman.style.left);			
		break;

		case directions["action"]:
			if (woman_sprite.getAttribute("src").search("ada_gun1") > 0) {
				woman_sprite.setAttribute("src", "assets/woman.png");
			}
			else {
				woman_sprite.setAttribute("src", "assets/ada_gun1.gif");
			}
		
		break;

	}
};