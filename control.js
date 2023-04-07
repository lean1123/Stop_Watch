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

var startTime;
var timeInterval;

function startTimer() {
    startTime = 0;
    timeInterval = setInterval(function() {
        startTime++;
        if (startTime == 100) {
            startTime = 0;
        }
        console.log(startTime);
    }, 10);

}

function stopTimer() {
    console.log("stop");
    clearInterval(timeInterval);
}

starbtn.addEventListener("click", startTimer);
stopbtn.addEventListener("click", stopTimer);
resetbtn.addEventListener("click", resetTimer);