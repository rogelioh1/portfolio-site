var video = document.getElementById("loops");
var videosource = document.getElementById("video");
var newmp4 = localStorage.getItem('newmp4') || "asset/rain.mp4";
var videobutton = document.getElementById("videochanger");
var btn = document.getElementById("player");

if (newmp4 === "asset/lightloop.mp4") { //If browser has theme data saved loads previous theme
  videosource.setAttribute('src', "asset/rain.mp4");
  videobutton.innerHTML = "☀️";
  video.load();
  video.play();
}

videobutton.addEventListener("click", function(event) { //controls theme changer
    video.pause();
    fade(video);
    if (newmp4 === "asset/lightloop.mp4"){
        videosource.setAttribute('src', newmp4);
        newmp4 = "asset/rain.mp4"
        videobutton.innerHTML = "🌧️";
    }
    else {
        videosource.setAttribute('src', newmp4);
        newmp4 = "asset/lightloop.mp4"
        videobutton.innerHTML = "☀️";
    }
    localStorage.setItem('newmp4', newmp4);
    video.load();
    video.play();
}, false);

function fade(element) { //fade for theme changer
    var op = 0;
    var timer = setInterval(function() {
        if (op >= 1) clearInterval(timer);
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1 || 0.1;
    }, 20);
}

function pressplayer() { //controls play/pause button
  if (video.paused) {
    video.play();
    btn.innerHTML = "⏸️";
  } else {
    video.pause();
    btn.innerHTML = "▶️";
  }
}