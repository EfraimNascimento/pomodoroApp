var start = document.getElementById('startBtn');
var stop = document.getElementById('stopBtn');
var reset = document.getElementById('resetBtn');

var workMinutes = document.getElementById('Wminutes');
var workSeconds = document.getElementById('Wseconds');

var breakMinutes = document.getElementById('Bminutes');
var breakSeconds = document.getElementById('Bseconds');

var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    workMinutes.innerText = 25;
    workSeconds.innerText = "00";

    breakMinutes.innerText = 5;
    breakSeconds.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})

function timer(){
    if(workSeconds.innerText != 0){
      workSeconds.innerText--;
    } else if(workMinutes.innerText != 0 && workSeconds.innerText == 0){
      workSeconds.innerText = 59;
      workMinutes.innerText--;
    }
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0){
        if(breakSeconds.innerText != 0){
          breakSeconds.innerText--;
        } else if(breakMinutes.innerText != 0 && breakSeconds.innerText == 0){
          breakSeconds.innerText = 59;
          breakMinutes.innerText--;
        }
    }
    if(workMinutes.innerText == 0 && workSeconds.innerText == 0 && breakMinutes.innerText == 0 && breakSeconds.innerText == 0){
      workMinutes.innerText = 25;
        Wseconds.innerText = "00";

        breakMinutes.innerText = 5;
        breakSeconds.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}
function stopInterval(){
    clearInterval(startTimer);
}