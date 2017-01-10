
var vid, playbtn, seekslider,curtimetext,durtimetext,mutebtn,fullscreenbtn,hidebar,videocontainer, q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11,q12,q13,q14,q15,q16;


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
	
	q1 = document.getElementById('q1');
	q2 = document.getElementById('q2');
	q3 = document.getElementById('q3');
	q4 = document.getElementById('q4');
	q5 = document.getElementById('q5');
	q6 = document.getElementById('q6');
	q7 = document.getElementById('q7');
	q8 = document.getElementById('q8');
	q9 = document.getElementById('q9');
	q10 = document.getElementById('q10');
	q11 = document.getElementById('q11');
	q12 = document.getElementById('q12');
	q13 = document.getElementById('q13');
	q14 = document.getElementById('q14');
	q15 = document.getElementById('q15');
	q16 = document.getElementById('q16');

// Event listeners
	
	playbtn.addEventListener("click",playPause,false);
	seekslider.addEventListener("change",vidSeek,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
	mutebtn.addEventListener("click",vidmute,false);
	fullscreenbtn.addEventListener("click",toggleFullScreen,false);
} 

window.onload = intializePlayer;

 $(document).ready(function () {
        $("#videocontainer").mouseenter(function () {
           $("#hidebar").show();
        });
        $("#videocontainer").mouseleave(function () {
            $("#hidebar").hide();
        });
   });

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
	
	if (vid.currentTime < 4.12) {q1.classList.add("high");}
	if (vid.currentTime > 4.13) {q1.classList.remove("high");}
	
	if (vid.currentTime > 4.14) {q2.classList.add("high");}
	if (vid.currentTime > 7.52) {q2.classList.remove("high");}
	
	if (vid.currentTime > 7.53) {q3.classList.add("high");}
	if (vid.currentTime > 11.27) {q3.classList.remove("high");}
	
	if (vid.currentTime > 11.28) {q4.classList.add("high");}
	if (vid.currentTime > 13.96) {q4.classList.remove("high");}
	
	if (vid.currentTime > 13.97) {q5.classList.add("high");}
	if (vid.currentTime > 17.94) {q5.classList.remove("high");}
	
	if (vid.currentTime > 17.95) {q6.classList.add("high");}
	if (vid.currentTime > 22.37) {q6.classList.remove("high");}
	
	if (vid.currentTime > 22.38) {q7.classList.add("high");}
	if (vid.currentTime > 26.88) {q7.classList.remove("high");}
	
	if (vid.currentTime > 26.89) {q8.classList.add("high");}
	if (vid.currentTime > 30.92) {q8.classList.remove("high");}
	
	if (vid.currentTime > 32.10) {q9.classList.add("high");}
	if (vid.currentTime > 34.73) {q9.classList.remove("high");}
	
	if (vid.currentTime > 34.74) {q10.classList.add("high");}
	if (vid.currentTime > 39.43) {q10.classList.remove("high");}
	
	if (vid.currentTime > 39.44) {q11.classList.add("high");}
	if (vid.currentTime > 41.19) {q11.classList.remove("high");}
	
	if (vid.currentTime > 42.35) {q12.classList.add("high");}
	if (vid.currentTime > 46.30) {q12.classList.remove("high");}
	
	if (vid.currentTime > 46.31) {q13.classList.add("high");}
	if (vid.currentTime > 49.27) {q13.classList.remove("high");}
	
	if (vid.currentTime > 49.28) {q14.classList.add("high");}
	if (vid.currentTime > 53.76) {q14.classList.remove("high");}
	
	if (vid.currentTime > 53.77) {q15.classList.add("high");}
	if (vid.currentTime > 57.78) {q15.classList.remove("high");}
	
	if (vid.currentTime > 57.79) {q16.classList.add("high");}
	if (vid.currentTime > 59.02) {q16.classList.remove("high");}
	

	
}

function vidmute(){
	
	if(vid.muted) {
			vid.muted = false;
			mutebtn.style.background = "url(icons/volume-off-icon.png) no-repeat";
		} else {
			vid.muted = true;
			mutebtn.style.background = "url(icons/volume-on-icon.png) no-repeat";
		}
}





function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}



	










