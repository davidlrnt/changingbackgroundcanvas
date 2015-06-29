
window.onload=function(){

var count = 0;
var color = 'black';

function draw() {
	count++;
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
		for (var i = 0; i < 500; i++) {
			ctx.beginPath();
			var xN = Math.floor((Math.random() * 1300) + 1);
			var yN = Math.floor((Math.random() * 1000) + 1);

			var n1 = Math.floor(Math.random() * 201) - 100;
			var n2 = Math.floor(Math.random() * 201) - 100;

			ctx.moveTo(xN, yN);
			ctx.lineTo(xN+n1,yN-n2);
			ctx.strokeStyle = color;
			ctx.stroke();
		};
		if (count>150){
			color = "white";
		}
		if (count>300){
			count = 0;
			color = "black"
		}
	};
setInterval(draw, 90)

};