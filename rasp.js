var today=0;
var tomorrow=0;

function nextImage_today() {
	if (today==-2){
		document.getElementById("rasp_image_today").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//today_m1.png";
		today=today+1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_previous").style.display="inline";
	} else if(today==-1) {
		document.getElementById("rasp_image_today").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//today_m0.png";
		today=today+1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_next").style.display="none";
	} 
}

function previousImage_today() {
	if (today==-1){
		document.getElementById("rasp_image_today").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//today_m2.png";
		today=today-1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_previous").style.display="none";
	} else if(today==0) {
		document.getElementById("rasp_image_today").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//today_m1.png";
		today=today-1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_next").style.display="inline";
	} 
}

function nextImage_tomorrow() {
	if(tomorrow==-1) {
		document.getElementById("rasp_image_tomorrow").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//tomorrow_m0.png";
		tomorrow=tomorrow+1;
		document.getElementById("rasp_image_tomorrow_number").innerHTML=tomorrow;
		document.getElementById("tomorrow_previous").style.display="inline";
		document.getElementById("tomorrow_next").style.display="none";
	}
}

function previousImage_tomorrow() {
	if(tomorrow==0) {
		document.getElementById("rasp_image_tomorrow").src="http://res.cloudinary.com/dxfk8zcuc/image/upload//tomorrow_m1.png";
		tomorrow=tomorrow-1;
		document.getElementById("rasp_image_tomorrow_number").innerHTML=tomorrow;
		document.getElementById("tomorrow_previous").style.display="none";
		document.getElementById("tomorrow_next").style.display="inline";
	} 
}