var display = document.querySelector(".watch-display");
var starbtn = document.querySelector("#start-btn");
var stopbtn = document.querySelector("#stop-btn");
var resetbtn = document.querySelector("#reset-btn");

// var startTime;
// var elapsedTime = 0;
// var timerInterval;

// function startTimer() {
//     startTime = Date.now() - elapsedTime;
//     timerInterval = setInterval(function() {
//         elapsedTime = Date.now() - startTime;
//         display.textContent = formatTime(elapsedTime);
//     }, 10)
// }

// function stopTimer() {
//     clearInterval(timerInterval);
// }

// function resetTimer() {
//     stopTimer();
//     elapsedTime = 0;
//     display.textContent = formatTime(elapsedTime);
// }

// function formatTime(miliseconds) {
//     var date = new Date(miliseconds);
//     var minutes = date.getUTCMinutes().toString().padStart(2, "0");
//     var seconds = date.getUTCSeconds().toString().padStart(2, "0");
//     var milisecondsFormattted = Math.floor(date.getUTCMilliseconds() / 10).toString().padStart(2, "0");
//     return `${minutes}:${seconds}:${milisecondsFormattted}`;
// }

var m, s, min;
var timeInterval;

function startTimer() {
    m = 0, s = 0, min = 0;
    timeInterval = setInterval(function() {
        m++;
        if (m == 100) {
            s++;
            m = 0;
            if (s == 60) {
                min++;
                s = 0;
                if (min == 60) {
                    resetTimer();
                }
            }
        }
        display.textContent = `${min}:${s}:${m}`;
    }, 10);

}

function stopTimer() {
    console.log("stop");
    clearInterval(timeInterval);
}

function resetTimer() {
    stopTimer();
    m = 0, s = 0, min = 0;
    display.textContent = `0:0:00`;
}

starbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stopTimer);
resetbtn.addEventListener("click", resetTimer);