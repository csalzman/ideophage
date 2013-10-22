var small_fire = {
  x: 400,
  y: 550,
  width: 30,
  height: 24,
  keyframe: 1,
  draw: function(keyframe, x, y, width, height) {
	canvas.drawImage(small_fire_image[keyframe], x, y, width, height);
  }
};

var large_fire = {
  x: 400,
  y: 550,
  width: 30,
  height: 24,
  keyframe: 1,
  draw: function(keyframe, x, y, width, height) {
	canvas.drawImage(large_fire_image[keyframe], x, y, width, height);
  }
};

var player = {
  x: 220,
  y: 450,
  width: 85,
  height: 125,
  direction: "right",
  walk_cycle: 1,
  draw: function(direction) {
	  switch (direction) {
	  	case "right":
			canvas.drawImage(woman_walking_right[this.walk_cycle], this.x, this.y, this.width, this.height);
			canvas.drawImage(shadow_image, this.x, (this.y + this.height), this.width, 10);
		break;
		case "left":
			canvas.drawImage(woman_walking_left[this.walk_cycle], this.x, this.y, this.width, this.height);
			canvas.drawImage(shadow_image, this.x, (this.y + this.height), this.width, 10);			
		break;
	}

  }
};

var traitor = {
	x: 600,
	y: 200,
	width: 52,
	height: 140,
	hover_state: "up",
	hover: 275,
	draw: function(hover) {
		canvas.drawImage(traitor_image, this.x, hover, this.width, this.height);
		canvas.drawImage(shadow_image, this.x, 500, this.width, 10);			
	}
};

var background = {
  x: 0,
  y: 0,
  width: 800,
  height: 600,
  draw: function() {
	canvas.drawImage(background_image, this.x, this.y);			
  }
};

var pedastal = {
	x: 290,
	y: 320,
	width:161,
	height:261,
	active:1,
	draw: function() {
		this.active ? canvas.drawImage(pedastal_image, this.x, this.y) : canvas.drawImage(pedastal_greenx_image, this.x, this.y);
	},
	clicked: function(coordinates) {
		if (coordinates.x >= this.x && coordinates.x <= (this.x + this.width) && coordinates.y >= this.y && coordinates.y <= (this.y + this.height)) {
			return 1;
		}
		else {
			return 0;
		}
	}
};

var key = {
	x: 500,
	y: 550,
	width:50,
	height:32,
	item:"field",
	inventory_slot:undefined,
	draw: function() {
		if (this.item == "field") {
			canvas.drawImage(key_image, this.x, this.y, this.width, this.height);					
		}
		if (this.item =="inventory") {
			canvas_inventory.drawImage(key_image, 0, 0);
		}

	},
	clicked: function(coordinates) {
		if (coordinates.x >= this.x && coordinates.x <= (this.x + this.width) && coordinates.y >= this.y && coordinates.y <= (this.y + this.height)) {
			return 1;
		}
		else {
			return 0;
		}
	}
};

var inventory = {
  x: 0,
  y: 0,
  width:800,
  height:100,
  active: 0,
  draw: function() {
	  canvas_inventory.globalAlpha=0.5;
	  canvas_inventory.fillRect(this.x, this.y, 800, 50);
	  canvas_inventory.globalAlpha=1;
  }
};

