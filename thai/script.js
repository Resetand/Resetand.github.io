const MAIN_DATE = Date.UTC(2023, 9, 29, 20, 0, 0, 0);

const DAYS_EL = document.getElementById("cd-days");
const HOURS_EL = document.getElementById("cd-hours");
const MINUTES_EL = document.getElementById("cd-min");
const SECONDS_EL = document.getElementById("cd-sec");
const MILLISECONDS_EL = document.getElementById("cd-ms");

const formatTime = (time) => time.toString().padStart(2, "0");

const main = () => {
    const timeRemaining = MAIN_DATE - new Date().getTime();

    const days = formatTime(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
    const hours = formatTime(Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const min = formatTime(Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
    const sec = formatTime(Math.floor((timeRemaining % (1000 * 60)) / 1000));
    const ms = formatTime(Math.floor((timeRemaining % 1000) / 10));

    document.title = `Thai in ${days}d, ${hours}h, ${min}m, ${sec}s`;

    DAYS_EL.innerHTML = days;
    HOURS_EL.innerHTML = hours;
    MINUTES_EL.innerHTML = min;
    SECONDS_EL.innerHTML = sec;
    MILLISECONDS_EL.innerHTML = ms;

    // using requestAnimationFrame to update the countdown

    if (timeRemaining > 0) {
        requestAnimationFrame(main);
    }
};

main();
