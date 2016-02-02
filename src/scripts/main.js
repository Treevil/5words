function loadFiveWords(){
    for (var i = 0; i < 5; i++ ){
        document.getElementById("container").innerHTML += Dictionary[Math.floor(Math.random() * 18554)] + "<br>";
    }
}


// Chronometer

var startTime = 0;
var start = 0;
var end = 0;
var diff = 0;
var timerID = 0;

function chrono() {
    end = new Date();
    diff = end - start;
    diff = new Date(diff);
    var msec = diff.getMilliseconds();
    var sec = diff.getSeconds();
    var min = diff.getMinutes();
    var hr = diff.getHours() - 1;
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    
    if (msec < 10) {
        msec = "00" + msec;
    } else if (msec < 100) {
        msec = "0" + msec;
    }
    document.getElementById("chronotime").innerHTML = hr + ":" + min + ":" + sec + ":" + msec;
    timerID = setTimeout("chrono()", 10);
}

function chronoStart() {
    document.getElementById("playnstop").children[0].className = "fa fa-pause";
    document.getElementById("playnstop").onclick = chronoStop;
    document.getElementById("reset").onclick = chronoReset;
    start = new Date();
    chrono();
    loadFiveWords();
}

function chronoContinue() {
    document.getElementById("playnstop").children[0].className = "fa fa-pause";
    document.getElementById("playnstop").onclick = chronoStop;
    document.getElementById("reset").onclick = chronoReset;
    start = new Date() - diff;
    start = new Date(start);
    chrono();
}

function chronoReset() {
    document.getElementById("chronotime").innerHTML = "0:00:00:000";
    start = new Date();
}

function chronoStopReset() {
    document.getElementById("chronotime").innerHTML = "0:00:00:000";
    document.getElementById("playnstop").onclick = chronoStart;
    document.getElementById("container").innerHTML = "";
}

function chronoStop() {
    document.getElementById("playnstop").children[0].className = "fa fa-play";
    document.getElementById("playnstop").onclick = chronoContinue;
    document.getElementById("reset").onclick = chronoStopReset;
    clearTimeout(timerID);
}