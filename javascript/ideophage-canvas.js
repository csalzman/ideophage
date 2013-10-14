



















// 
// 
// function WhereClicked(x, y) {
// 	this.x = x;
// 	this.y = y;
// }
// 
// 
// var sprite = new Image();
// sprite.src = "assets/tumbler.png";
// 
// 
// canvas.addEventListener("click", mainOnClick, false);
// 
// function mainOnClick(e) {
// 	var cell = getCursorPosition(e);
// 	console.log(cell);
// 	context.drawImage(sprite, cell["x"] - 150, cell["y"] - 150);
// }
// 
// function getCursorPosition(e) {
//     var x;
//     var y;
//     if (e.pageX != undefined && e.pageY != undefined) {
// 	x = e.pageX;
// 	y = e.pageY;
//     }
//     else {
// 	x = e.clientX + document.body.scrollLeft +
//             document.documentElement.scrollLeft;
// 	y = e.clientY + document.body.scrollTop +
//             document.documentElement.scrollTop;
//     }
// 	x -= canvas.offsetLeft;
//     y -= canvas.offsetTop;
// 	var coordinates = new WhereClicked(x, y);
// 	return coordinates;
// };