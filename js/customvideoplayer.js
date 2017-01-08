
var vid, playbtn, seekslider,curtimetext,durtimetext,mutebtn,fullscreenbtn,hidebar,videocontainer;

function intializePlayer () {

	vid = document.getElementById('my_video');
	playbtn = document.getElementById('playpausebtn');
	seekslider = document.getElementById('seekslider');
	curtimetext = document.getElementById('curtimetext');
	durtimetext = document.getElementById('durtimetext');
	mutebtn = document.getElementById('mutebtn');
	fullscreenbtn = document.getElementById('fullscreenbtn');
	videocontainer = document.getElementById('videocontainer');
	hidebar = document.getElementById('hidebar');



// Event listeners
	
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
	videocontainer.addEventListener("mouseover",showhidebar,false);
	videocontainer.addEventListener("onmouseout",hidebar,false);




} 

window.onload = intializePlayer;

// $(document).ready(function () {
//        $("#videocontainer").mouseenter(function () {
//           $("#hidebar").show();
//        });
//        $("#videocontainer").mouseleave(function () {
//            $("#hidebar").hide();
//        });
//   });

function playPause(){
		
		if(vid.paused) {
			vid.play();
			playbtn.style.background = "url(icons/pause-icon.png) no-repeat";
		} else {
			vid.pause();
			playbtn.style.background = "url(icons/play-icon.png) no-repeat";
		}
	}

function vidSeek() {
	
	var seekto = vid.duration  * (seekslider.value / 100);
	vid.currentTime = seekto;
	
}

function seektimeupdate () {
	var nt = vid.currentTime * (100 / vid.duration);
	
	seekslider.value = nt;
	
	
	var curmins = Math.floor(vid.currentTime / 60);
	var cursecs = Math.floor(vid.currentTime - curmins * 60);
	var durmins = Math.floor(vid.duration / 60);
	var dursecs = Math.round(vid.duration - durmins * 60);
	
	if (cursecs < 10) {cursecs = "0" +cursecs;} 
	if (dursecs < 10){dursecs = "0"+dursecs;}
	if (curmins < 10) {curmins = "0" +curmins;} 
	if (durmins < 10){durmins = "0"+durmins;}
	
	curtimetext.innerHTML = curmins+":"+cursecs;
	durtimetext.innerHTML = durmins+":"+dursecs;
	
}

function vidmute () {
	
	if(vid.muted) {
			vid.muted = false;
			mutebtn.style.background = "url(icons/volume-off-icon.png) no-repeat";
		} else {
			vid.muted = true;
			mutebtn.style.background = "url(icons/volume-on-icon.png) no-repeat";
		}
}

function showhidebar () {
	hidebar.style.display= "flex";
}


function hidebar () {
	hidebar.style.display= "none";
}



function toggleFullScreen (){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}



