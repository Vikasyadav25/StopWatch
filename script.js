// All variable declare here
var min = 0;
var sec = 0;
var miliSec = 0;
var timer;
// this function call when start btn click
function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60)  {
                sec = 0;
                min++;
            }
        }
    }
    else{
        miliSec = 0;
    }
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}

// onClick of Start Btn this function call
function start() {
    document.getElementById("start").disabled = true;
    timer = setInterval(callTimer, 10);
}

// onClick of Stop Btn this function call
function stop() {
    document.getElementById("start").disabled = false;
    clearInterval(timer);
}

// onClick of Reset Btn this function call
function reset() {
    stop();
    min = 0;
    sec = 0;
    miliSec = 0;
    document.getElementById("timer").innerHTML = min + ":" + sec + ":" + miliSec;
}