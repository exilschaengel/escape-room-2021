var secondsRemaining = null
var timerInterval = null
var timeoutCallback = function () {}

var decreaseTimer = function () {
    if (secondsRemaining === 0) {
        stopTimer()
        timeoutCallback()
    } else {
        secondsRemaining--
        updateClock(secondsRemaining)
    }
}

var updateClock = function (seconds) {
    var clock = document.getElementById("timer")
    var newMins = ("00" + (Math.floor(seconds / 60))).slice(-2)
    var newSecs = ("00" + (seconds % 60)).slice(-2)
    clock.textContent = newMins + ":" + newSecs
}

var stopTimer = function () {
    if(timerInterval) {
        window.clearInterval(timerInterval)
    }
}

var startTimer = function (seconds, callback) {
    stopTimer()
    secondsRemaining = seconds
    timeoutCallback = callback
    updateClock(secondsRemaining)
    timerInterval = window.setInterval(decreaseTimer, 1000)
}
