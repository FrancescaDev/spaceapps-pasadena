// implement css id="countDownTimer"
// variables
var DATE_STOP_COUNTDOWN = "Oct 2, 2021 00:00:00"; // m d, yyyy hh:mm:ss

var COUNT_DOWN_COMPLETE_MSG = "EXPIRED";

var DAY = 24, HOUR = 60, MINUTE = 60, SECOND = 1000, STOP = 0;

var labelDays = " days ", labelHours = " hours ", labelMinutes = " minutes ", labelSeconds = " seconds "

// set the date to stop the count down
var stopCountDownDate = new Date(DATE_STOP_COUNTDOWN).getTime();

// update the count down every second
var countDown = setInterval(function () {
    // get current day and time
    var currentDateTime = new Date().getTime();

    //calculate the diffence from stop count down date and current day and time
    var difference = stopCountDownDate - currentDateTime;

    //calculate time for days, hours, minutes and seconds
    var days = Math.floor(difference / (DAY * HOUR * MINUTE * SECOND));
    var hours = Math.floor((difference % (DAY * HOUR * MINUTE * SECOND)) / (HOUR * MINUTE * SECOND));
    var minutes = Math.floor((difference % (HOUR * MINUTE * SECOND)) / (MINUTE * SECOND));
    var seconds = Math.floor((difference % (MINUTE * SECOND)) / SECOND);

    // display count down timer
    if (days > 1) {
        labelDays = " days ";
    }
    if (hours > 1) {
        labelHours = " hours ";
    }
    if (minutes > 1) {
        labelMinutes = " minutes ";
    }
    if (seconds > 1) {
        labelSeconds = " seconds ";
    }
    if (days < 2) {
        labelDays = " day ";
    }
    if (hours < 2) {
        labelHours = " hour ";
    }
    if (minutes < 2) {
        labelMinutes = " minute ";
    }
    if (seconds < 2) {
        labelSeconds = " second ";
    }
    output(days + labelDays + hours + labelHours + minutes + labelMinutes + seconds + labelSeconds);

    // when count down is complete, display this message
    if (difference < STOP) {
        clearInterval(countDown);
        output(COUNT_DOWN_COMPLETE_MSG);
    }

    function output(message) {
        document.getElementById("countDownTimer").innerHTML = message;
    }
}, SECOND);