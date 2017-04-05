var days = ['Zondag','Maandag','Dinsdag','Woensdag','Donderdag','Vrijdag','Zaterdag'];
var today=0;
var tomorrow=0;
var now = new Date();
var t = now.getTime();
var url = "";

function set_correct_links(){
	console.log("inside set_correct_links");
	var base_url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v";
	var url_today=base_url.concat(t.toString(),"/today_m0.png");
	var url_tomorrow=base_url.concat(t.toString(),"/tomorrow_m0.png");
	var url_day_after_tomorrow=base_url.concat(t.toString(),"/day_after_tomorrow_m0.png");

	var day = days[now.getDay()];
	var day_p1 = days[(now.getDay() + 1) % days.length];
	var day_p2 = days[(now.getDay() + 2) % days.length];

	document.getElementById("today_name").innerHTML=day;
	document.getElementById("tomorrow_name").innerHTML=day_p1;
	document.getElementById("day_after_tomorrow_name").innerHTML=day_p2;

	document.getElementById("rasp_image_today").src = url_today;
	document.getElementById("rasp_image_tomorrow").src = url_tomorrow;
	document.getElementById("rasp_image_day_after_tomorrow").src = url_day_after_tomorrow;
}

function nextImage_today() {
	if (today==-2){
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/today_m1.png");
		document.getElementById("rasp_image_today").src=url;
		today=today+1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_previous").style.display="inline";
	} else if(today==-1) {
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/today_m0.png");
		document.getElementById("rasp_image_today").src=url;
		today=today+1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_next").style.display="none";
	} 
}

function previousImage_today() {
	if (today==-1){
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/today_m2.png");
		document.getElementById("rasp_image_today").src=url;
		today=today-1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_previous").style.display="none";
	} else if(today==0) {
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/today_m1.png");
		document.getElementById("rasp_image_today").src=url;
		today=today-1;
		document.getElementById("rasp_image_today_number").innerHTML=today;
		document.getElementById("today_next").style.display="inline";
	} 
}

function nextImage_tomorrow() {
	if(tomorrow==-1) {
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/tomorrow_m0.png");
		document.getElementById("rasp_image_tomorrow").src=url;
		tomorrow=tomorrow+1;
		document.getElementById("rasp_image_tomorrow_number").innerHTML=tomorrow;
		document.getElementById("tomorrow_previous").style.display="inline";
		document.getElementById("tomorrow_next").style.display="none";
	}
}

function previousImage_tomorrow() {
	if(tomorrow==0) {
		url="http://res.cloudinary.com/dxfk8zcuc/image/upload/v".concat(t.toString(),"/tomorrow_m1.png");
		document.getElementById("rasp_image_tomorrow").src=url;
		tomorrow=tomorrow-1;
		document.getElementById("rasp_image_tomorrow_number").innerHTML=tomorrow;
		document.getElementById("tomorrow_previous").style.display="none";
		document.getElementById("tomorrow_next").style.display="inline";
	} 
}