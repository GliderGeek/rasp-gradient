var today=0;
var tomorrow=0;

function nextImage_today() {
	if (today==-2){
		document.getElementById("rasp_image_today").src="images/vandaag_m1.png";
		today=today+1;
		document.getElementById("today_previous").style.display="inline";
	} else if(today==-1) {
		document.getElementById("rasp_image_today").src="images/vandaag_m0.png";
		today=today+1;
		document.getElementById("today_next").style.display="none";
	} 
}

function previousImage_today() {
	if (today==-1){
		document.getElementById("rasp_image_today").src="images/vandaag_m2.png";
		today=today-1;
		document.getElementById("today_previous").style.display="none";
	} else if(today==0) {
		document.getElementById("rasp_image_today").src="images/vandaag_m1.png";
		today=today-1;
		document.getElementById("today_next").style.display="inline";
	} 
}

function nextImage_tomorrow() {
	if(tomorrow==-1) {
		document.getElementById("rasp_image_tomorrow").src="images/morgen_m0.png";
		tomorrow=tomorrow+1;
		document.getElementById("tomorrow_previous").style.display="inline";
		document.getElementById("tomorrow_next").style.display="none";
	}
}

function previousImage_tomorrow() {
	if(tomorrow==0) {
		document.getElementById("rasp_image_tomorrow").src="images/morgen_m1.png";
		tomorrow=tomorrow-1;
		document.getElementById("tomorrow_previous").style.display="none";
		document.getElementById("tomorrow_next").style.display="inline";
	} 
}